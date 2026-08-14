import mongoose from "mongoose";

const MetricSchema = new mongoose.Schema({
  target: Number,
  suffix: String,
  label: String,
  sub: String,
  icon: String,
  status: { type: String, default: "active" }
}, { timestamps: true });

export default mongoose.models.Metric || mongoose.model("Metric", MetricSchema);
