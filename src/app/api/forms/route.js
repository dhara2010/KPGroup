import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Form from "@/models/Form";

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();

        const form = await Form.create(body);

        return NextResponse.json(
            {
                success: true,
                message: "Form submitted successfully",
                form,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();

        const forms = await Form.find().sort({
            createdAt: -1,
        });

        return NextResponse.json(forms);
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error.message,
            },
            { status: 500 }
        );
    }
}