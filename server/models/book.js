import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorId: { type: String, required: true },
});

const bookModel = mongoose.model("Book", bookSchema);

export default bookModel;
