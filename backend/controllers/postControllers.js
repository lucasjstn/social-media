const fs = require("fs");
const path = require("path");
const { post } = require("../routes/testRoutes");

const Post = require("../models/postModel.js");

const SAMPLE_POSTS = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../tests/data/posts.json"))
);

const getAllPosts = async (req, res) => {
    // console.log(SAMPLE_POSTS);

    try {
        const posts = await Post.find();

        if (!post) {
            res.status(200).json({
                status: "fail",
                message: "post not found",
            });
        }

        res.status(200).json({
            status: "success",
            data: posts,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
};

const getPostById = async (req, res) => {
    try {
        const newPost = await Post.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data: newPost,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
};

const createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);

        res.status(200).json({
            status: "success",
            data: newPost,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
};

const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        console.log(req.params.id);

        res.status(200).json({
            status: "success",
            data: updatedPost,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
};

const deletePost = (req, res) => {
    //1 verificar se o post existe
    const id = Number(req.params.id);
    const post = SAMPLE_POSTS.find((item) => {
        return item.id === id;
    });

    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "post doesnt exist",
        });
    }

    const updatedPosts = SAMPLE_POSTS.map((item) => {
        if (item.id !== id) {
            return item;
        }
    });

    fs.writeFile(
        path.resolve(__dirname, "../tests/data/posts.json"),
        JSON.stringify(updatedPosts),
        () => {
            return res.status(200).json({
                status: "success",
                message: "post sucessfully removed",
            });
        }
    );
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
// module.exports = ;
