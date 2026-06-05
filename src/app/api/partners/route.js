import connectDB from "@/lib/db";
import Partner from "@/models/Partner";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const partners = await Partner.find({});

    console.log("Partners found:", partners.length);

    return NextResponse.json(partners);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch partners", error: error.message },
      { status: 500 }
    );
  }
}