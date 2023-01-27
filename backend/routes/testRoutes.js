const express = require("express");

const testFunction  = require("../controllers/testController.js");

const router = express.Router();

router.route("/testFn").get(testFunction);

module.exports = router;
