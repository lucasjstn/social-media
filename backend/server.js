import express from "express";
import cors from "cors";

const app = express();

// middlewares
app.use(express.json());
app.use(cors())

const port = 8000;

// HTTP GET Requested
app.get('/', (req, res) => {
    res.status(201).json("HOME GET REQUEST")
})

app.listen(port, ()=> {
    console.log(`Server connected to http://localhost:${port}`)
})
