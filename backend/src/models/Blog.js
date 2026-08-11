import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    excerpt: String,
    content: String,
    image: String,
    category: String,
    author: String,
    date: String,
    month: String,
    commentsCount: {
      type: Number,
      default: 0,
    },
    isTerminalStyle: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "active",
    },
  },
  {
    timestamps: true,
    collection: "blogs",
  }
);

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);