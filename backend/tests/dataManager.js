const fs = require("fs");
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const { post } = require("../routes/testRoutes");

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
