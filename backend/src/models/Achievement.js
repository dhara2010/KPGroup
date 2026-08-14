import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema({
  year: String,
  title: String,
  desc: String,
  status: { type: String, default: "active" }
}, { timestamps: true });

export default mongoose.models.Achievement || mongoose.model("Achievement", AchievementSchema);
