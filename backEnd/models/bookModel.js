import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  //id field not required since it is automatically handled by database
  {
    timestamps: true, //time od adding them and time of update
  }
);

export const Book = mongoose.model("Cat", bookSchema);
