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
            data: post,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
};

const updatePost = (req, res) => {
    console.log(req.body.params);

    // 1 check whether the post exist or not
    const id = Number(req.params.id);
    const post = SAMPLE_POSTS.find((item) => item.id === id);

    console.log(post);
    // 2 if it doesnt exist then return error
    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "post not found",
        });
    }

    // 3 if it exists then update the post
    const updatedPosts = SAMPLE_POSTS.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                title: req.body.title,
                content: req.body.content,
                createdAt: Date.now(),
            };
        }

        return item;
    });

    console.log(updatedPosts);

    // 4 save the updated post
    fs.writeFile(
        path.resolve(__dirname, "../tests/data/posts.json"),
        JSON.stringify(updatedPosts),
        () => {
            return res.status(200).json({
                status: "success",
                message: "post sucessfully updated",
            });
        }
    );
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
