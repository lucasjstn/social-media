const express = require("express");

const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
} = require("../controllers/postControllers.js");
// const  = require("../controllers/postControllers.js");

const router = require("./testRoutes");

const route = express.Router();

router.route("/all").get(getAllPosts);
router.route("/:id").get(getPostById);
router.route("/").post(createPost);
router.route("/:id").patch(updatePost);

module.exports = router;
