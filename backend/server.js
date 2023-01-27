const colors = require("colors");
const dotenv = require("dotenv");

const app = require('./src/app')

const PORT = 3000;
const server = app.listen(PORT, () => {
    console.log("Server is running");
})