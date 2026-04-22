import connectDB from "@/lib/mongodb";
import { Skill } from "@/models/Skill";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const PUT = requireAuth(async (req, { params }) => {
    try {
        await connectDB();
        const { id } = await params;
        const data = await req.json();
        const skill = await Skill.findByIdAndUpdate(id, data, { new: true });
        if (!skill) return NextResponse.json({ error: "Skill not found" }, { status: 404 });
        revalidatePath("/");
        return NextResponse.json(skill);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update skill" }, { status: 500 });
    }
});

export const DELETE = requireAuth(async (req, { params }) => {
    try {
        await connectDB();
        const { id } = await params;
        const skill = await Skill.findByIdAndDelete(id);
        if (!skill) return NextResponse.json({ error: "Skill not found" }, { status: 404 });
        revalidatePath("/");
        return NextResponse.json({ message: "Skill deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete skill" }, { status: 500 });
    }
});
