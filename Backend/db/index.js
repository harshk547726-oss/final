import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const withDatabaseName = (uri, databaseName) => {
  if (!uri) return "";

  try {
    const parsed = new URL(uri);
    if (parsed.pathname === "/" || parsed.pathname === "") {
      parsed.pathname = `/${databaseName}`;
    }
    return parsed.toString();
  } catch {
    return uri;
  }
};

const connectDB = async () => {
  const localMongoUri = withDatabaseName(process.env.MONGODB_URI, DB_NAME);

  if (!localMongoUri) {
    throw new Error("MONGODB_URI is missing in Backend/env");
  }

  try {
    const connectionInstance = await mongoose.connect(localMongoUri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(
      `MongoDB connected (local) !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection failed (local)", error.message);
    throw error;
  }
};

export default connectDB;
