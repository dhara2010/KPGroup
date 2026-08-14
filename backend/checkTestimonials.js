import "dotenv/config";
import mongoose from "mongoose";
import Testimonial from "./src/models/Testimonial.js";

async function checkTestimonials() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const testimonials = await Testimonial.find({}, { name: 1, isVideo: 1, videoSrc: 1, _id: 0 }).lean();
    console.log(JSON.stringify(testimonials, null, 2));
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

checkTestimonials();
