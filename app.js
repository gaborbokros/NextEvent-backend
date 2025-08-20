import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import errorHandler from "./src/middlewares/errorHandler.middleware.js"
import connectDatabase from "./src/config/connectDatabase.js";
import isDatabaseConnected from "./src/middlewares/isDatabaseConnected.middleware.js"

const { PORT, MONGO_URI } = process.env

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

connectDatabase(MONGO_URI)
app.use(isDatabaseConnected)

app.get("/", (req, res, next) => {
    res.status(200).send("Hey there!");
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});