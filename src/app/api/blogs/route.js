import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find({}).sort({
      createdAt: -1,
    });

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch blogs",
        error: error.message,
      },
      { status: 500 }
    );
  }
}