const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
    default: "",
  },
  author: {
    type: String,
    default: "admin",
  },
  title: {
    type: String,
    maxlength: 150,
    required: true,
    default: "",
  },
  content: {
    type: String,
    required: true,
    default: "",
  },
  tags: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Posts = mongoose.model("posts", postSchema);

module.exports = Posts;
