import mongoose from "mongoose";

const ReasonSchema = new mongoose.Schema({
  title: String,
  desc: String,
  icon: String,
  status: { type: String, default: "active" }
}, { timestamps: true });

export default mongoose.models.Reason || mongoose.model("Reason", ReasonSchema);
