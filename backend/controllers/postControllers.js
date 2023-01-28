const fs = require("fs");
const path = require("path");

const SAMPLE_POSTS = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../tests/data/posts.json"))
);

const getAllPosts = (req, res) => {
    // console.log(SAMPLE_POSTS);

    res.status(200).json({
        status: "success",
        data: SAMPLE_POSTS,
    });
};

module.exports = getAllPosts;
