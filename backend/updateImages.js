import "dotenv/config";
import mongoose from "mongoose";
import Blog from "./src/models/Blog.js";

async function updateImages() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    // AI is Transforming Modern Business
    await Blog.updateOne(
      { slug: "ai-transforming-modern-business" },
      { $set: { image: "/c2-img-1.webp" } }
    );

    // How to Organize Files at a Design Agency
    await Blog.updateOne(
      { slug: "how-to-organize-files-at-a-design-agency" },
      { $set: { image: "/pro-d2.webp" } }
    );

    // Designing Experiences that Leave a Lasting Impression
    await Blog.updateOne(
      { slug: "designing-experiences-that-leave-lasting-impression" },
      { $set: { image: "/sv.webp" } }
    );

    console.log("Updated images successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error updating images:", error);
    process.exit(1);
  }
}

updateImages();
