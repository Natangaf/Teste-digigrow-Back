import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    const url = process.env.MONGO_URI;

    if (!url) {
      throw new Error("MONGO_URI environment variable is not defined");
    }

    await mongoose.connect(url, {
      ssl: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    if (error instanceof Error) {
      console.error("MongoDB connection error:", error.message);
    } else {
      console.error("Unknown error occurred:", error);
    }
    process.exit(1);
  }
};

export default connectToDatabase;
