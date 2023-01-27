const express = require("express");

// routes
const testRouter = require("../routes/testRoutes");

const app = express();

app.use("/api/v1/test", testRouter); // complete router to call the function /api/v1/test

module.exports = app;
