import connectDB from "@/lib/db";
import Team from "@/models/Team";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const teams = await Team.find({ status: "active" }).sort({ createdAt: 1 });

    return NextResponse.json(teams);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch teams", error: error.message },
      { status: 500 }
    );
  }
}