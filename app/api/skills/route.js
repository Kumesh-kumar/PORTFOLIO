import connectDB from "@/lib/mongodb";
import { Skill } from "@/models/Skill";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
    try {
        await connectDB();
        const skills = await Skill.find().sort({ order: 1 });
        return NextResponse.json(skills);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
    }
}

export const POST = requireAuth(async (req) => {
    try {
        await connectDB();
        const data = await req.json();
        const skill = await Skill.create(data);
        revalidatePath("/");
        return NextResponse.json(skill, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create skill" }, { status: 500 });
    }
});
