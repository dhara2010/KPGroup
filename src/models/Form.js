import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        service: String,
        company: String,
        message: String,
        consent: Boolean,
        status: {
            type: String,
            default: "New",
        },
    },
    {
        timestamps: true,
        collection: "forms",
    }
);

export default mongoose.models.Form ||
    mongoose.model("Form", FormSchema);