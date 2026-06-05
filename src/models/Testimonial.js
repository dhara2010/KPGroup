import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    cat: String,
    name: String,
    role: String,
    type: String,
    content: String,
    rating: { type: Number, default: 5 },
    image: String,
    isVideo: { type: Boolean, default: false },
    videoSrc: String,
    color: String,
    status: { type: String, default: "active" },
  },
  { timestamps: true, collection: "testimonials" }
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);