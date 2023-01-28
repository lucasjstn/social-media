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

const getPostById = (req, res) => {
    const id = req.params.id * 1;
    console.log(id);

    const post = SAMPLE_POSTS.find((item) => item.id === id);

    if (!post) {
        return res.status(400).json({
            status: "fail",
            message: "post not found",
        });
    }

    return res.status(200).json({
            status: "success",
            data: post,
        });
};

module.exports = getAllPosts;
module.exports = getPostById;
