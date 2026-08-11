import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
    {
        name: String,
        role: String,
        image: String,
        color: String,
        status: { type: String, default: "active" },
    },
    { timestamps: true, collection: "teams" }
);

export default mongoose.models.Team || mongoose.model("Team", TeamSchema);