import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";

const app = express();
const port = 5000;

dotenv.config();

mongoose.connect(process.env.MONGOOSE_USER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());
app.use(router);

app.get("/", (req, res) => res.send("Welcome to the server"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
