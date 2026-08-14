import mongoose from "mongoose";

const EcosystemSchema = new mongoose.Schema({
  num: String,
  title: String,
  sub: String,
  desc: String,
  icon: String,
  className: String,
  image: String,
  href: String,
  status: { type: String, default: "active" }
}, { timestamps: true });

export default mongoose.models.Ecosystem || mongoose.model("Ecosystem", EcosystemSchema);
