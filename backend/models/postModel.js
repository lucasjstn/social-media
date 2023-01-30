const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title can't be empty"],
        minLength: [3, "title can't be smaller than three characters"],
        maxLength: [100, "title can't be bigger than 100 characters"],
    },
    content: {
        type: String,
        required: [true, "content can't be empty"],
        minLength: [8, "content can't be smaller than three characters"],
        maxLength: [1200, "content can't be bigger than 100 characters"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
