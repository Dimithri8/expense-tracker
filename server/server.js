import dotenv from "dotenv";

import express from "express";
import cors from "cors";
import { connectDB } from "./db/connection.js";

import userRouter from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors);
app.use(express.json());

connectDB();

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
