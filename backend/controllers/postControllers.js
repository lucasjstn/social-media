const fs = require("fs");
const path = require("path");
const { post } = require("../routes/testRoutes");

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

const createPost = (req, res) => {
    console.log(req.body);

    const newId = SAMPLE_POSTS[SAMPLE_POSTS.length - 1].id + 1;

    // 1 create a json object
    const newPost = Object.assign({
        id: newId,
        title: req.body.title,
        content: req.body.content,
        createdAt: Date.now(),
    });

    SAMPLE_POSTS.push(newPost);
    console.log(newPost);
    // 2 save the object
    // 3 return the newly created object back to the user
    fs.writeFile(
        path.resolve(__dirname, "../tests/data/posts.json"),
        JSON.stringify(SAMPLE_POSTS),
        () => {
            return res.status(200).json({
                status: "success",
                data: newPost,
            });
        }
    );
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
    console.log("deleted");
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
// module.exports = ;
