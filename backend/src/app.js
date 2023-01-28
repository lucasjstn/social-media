const express = require("express");

// routes
const testRouter = require("../routes/testRoutes");
const postRouter = require("../routes/postRoutes");

const app = express();

app.use("/api/v1/test", testRouter); // complete router to call the function /api/v1/test
app.use("/api/v1/post", postRouter);

module.exports = app;
