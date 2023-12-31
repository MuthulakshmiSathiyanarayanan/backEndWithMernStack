import express from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json()); //middleware for parsing req body
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to mern stack");
});

//route for save a new book
app.post("/books", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: "send all req fields:title,author,publishYear",
      });
    }
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
    };
    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBurl)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log("app is listening to port:", { PORT });
    });
  })
  .catch((error) => {
    console.log(error);
  });
