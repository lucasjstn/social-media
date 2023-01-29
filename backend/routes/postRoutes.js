const express = require("express");

const {
    getAllPosts,
    getPostById,
    createPost,
} = require("../controllers/postControllers.js");
// const  = require("../controllers/postControllers.js");

const router = require("./testRoutes");

const route = express.Router();

router.route("/all").get(getAllPosts);
router.route("/:id").get(getPostById);
router.route("/").post(createPost);

module.exports = router;
