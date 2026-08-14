import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema({
  question: String,
  answer: String,
  category: String,
  status: { type: String, default: "active" }
}, { timestamps: true });

export default mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);
