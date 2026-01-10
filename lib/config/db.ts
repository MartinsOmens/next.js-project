import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("Please define MONGO_URI in .env.local");
}

export const ConnectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
