import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

console.log("Mongo URI:", MONGODB_URI ? "Loaded" : "Not Loaded");

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env");
}

let cached = globalThis.mongoose;

if (!cached) {
  cached = globalThis.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;