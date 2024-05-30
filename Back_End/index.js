import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/users.routers";
import cors from "cors";
import voteRouter from "./routers/votes.routers";

const app = express();
app.use(express.json());
app.use(cors());
const port = 8001;

app.get("/", (req, res) => {
  res.send(`Welcome to server ki duniya!!! `);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/Voting_App")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.listen(port, () => {
  console.log(`Port is running on server ${port} `);
});

app.use(userRouter);
app.use(voteRouter);
