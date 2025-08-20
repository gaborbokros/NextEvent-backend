import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import errorHandler from "./src/middlewares/errorHandler.middleware.js"

const { PORT } = process.env

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get("/", (req, res, next) => {
    res.status(200).send("Hey there!");
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});