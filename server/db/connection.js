import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const uri = process.env.ATLAS_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connection successful");
  } catch (err) {
    console.error("MongoDB connection error: ", err);
    process.exit(1);
  }
};
