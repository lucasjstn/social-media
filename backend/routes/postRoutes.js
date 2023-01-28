const express = require("express");

const getAllPosts = require("../controllers/postControllers.js");
const getPostById = require("../controllers/postControllers.js");

const router = require("./testRoutes");

const route = express.Router();

router.route("/all").get(getAllPosts);
router.route("/:id").get(getPostById);

module.exports = router;
