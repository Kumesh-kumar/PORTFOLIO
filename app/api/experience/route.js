import connectDB from "@/lib/mongodb";
import { Experience } from "@/models/Experience";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const experiences = await Experience.find().sort({ order: 1, createdAt: -1 });
        return NextResponse.json(experiences);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch experiences" }, { status: 500 });
    }
}

export const POST = requireAuth(async (req) => {
    try {
        await connectDB();
        const data = await req.json();
        const experience = await Experience.create(data);
        return NextResponse.json(experience, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create experience" }, { status: 500 });
    }
});