import express from "express";
import cors from "cors";
import "dotenv/config";

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!a");
});

app.listen(PORT, () => {
  console.log(`[SERVER] Server is running on http://localhost:${PORT}`);
});
