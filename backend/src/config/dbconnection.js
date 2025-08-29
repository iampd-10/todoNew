import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const database = process.env.URL;

export async function dbConnection() {
  try {
    await mongoose.connect(database);
    console.log(`Database Connnected successfully with the cluster`);
  } catch (error) {
    console.log(`database connection failed ${error.massage}`);
  }
}
