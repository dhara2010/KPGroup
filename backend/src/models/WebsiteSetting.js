import mongoose from "mongoose";

const WebsiteSettingSchema = new mongoose.Schema({
  key: { type: String, unique: true },
  value: mongoose.Schema.Types.Mixed
}, { timestamps: true });

export default mongoose.models.WebsiteSetting || mongoose.model("WebsiteSetting", WebsiteSettingSchema);
