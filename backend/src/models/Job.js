import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  department: String,
  location: String,
  type: String,
  status: { type: String, default: "active" }
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model("Job", JobSchema);
