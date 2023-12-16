import express from "express";
import { PORT, mongoDBurl } from "./config.js";
import mongoose from "mongoose";

const app = express();
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to mern stack");
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
