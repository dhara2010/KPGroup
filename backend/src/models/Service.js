import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String,
  status: { type: String, default: "active" }
}, { timestamps: true });

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);
