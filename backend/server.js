const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const app = require("./src/app");

// database connection
mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true })
    .then(() => {
        console.log(colors.yellow("Database is connected"));
    });

// running server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(
        colors.yellow(
            `Server is running on port:${PORT} as ${process.env.NODE_ENV} mode`
        )
    );
});
