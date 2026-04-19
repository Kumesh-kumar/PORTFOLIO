import connectDB from "@/lib/mongodb";
import { Education } from "@/models/Education";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const education = await Education.find().sort({ order: 1 });
        return NextResponse.json(education);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch education" }, { status: 500 });
    }
}

export const POST = requireAuth(async (req) => {
    try {
        await connectDB();
        const data = await req.json();
        const education = await Education.create(data);
        return NextResponse.json(education, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create education" }, { status: 500 });
    }
});
