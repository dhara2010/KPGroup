import connectDB from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const testimonials = await Testimonial.find({ status: "active" }).sort({
      createdAt: 1,
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch testimonials", error: error.message },
      { status: 500 }
    );
  }
}