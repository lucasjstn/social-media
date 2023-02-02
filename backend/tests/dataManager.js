const fs = require("fs");
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const Post = require("../models/postModel.js");

dotenv.config({ path: "../config.env" });

const SAMPLE_POSTS = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "./data/posts.json"))
);

mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true })
    .then(() => {
        console.log(colors.yellow("Database is connected for testing"));
    });

const importData = async () => {
    // assync either can succeed or fail
    try {
        await Post.create(SAMPLE_POSTS);
        console.log("Data is imported");
    } catch (error) {
        console.log(error);
    }
};

const deleteData = async () => {
    try {
        await Post.deleteMany();
        console.log("Data is deleted");
    } catch (error) {
        console.log(error);
    }
};

if (process.argv[2] === "import") {
    importData();
} else if (process.argv[2] === "delete") {
    deleteData();
}
