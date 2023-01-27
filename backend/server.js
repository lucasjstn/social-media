const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./src/app");

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(colors.yellow(
        `Server is running on port:${PORT} as ${process.env.NODE_ENV} mode`)
    );
});
