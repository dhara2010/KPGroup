import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        logo: { type: String, required: true },
        type: {
            type: String,
            enum: ["Enterprise", "Vertical", "Ecosystem"],
            required: true,
        },
        website: { type: String },
        status: { type: String, default: "active" },
    },
    { timestamps: true }
);

export default mongoose.models.Partner ||
    mongoose.model("Partner", PartnerSchema);