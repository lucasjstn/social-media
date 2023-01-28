const express = require("express");

const getAllPosts = require("../controllers/postControllers.js");
const router = require("./testRoutes");

const route = express.Router();

router.route("/all").get(getAllPosts);

module.exports = router;
