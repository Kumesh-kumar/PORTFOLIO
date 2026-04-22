import connectDB from "@/lib/mongodb";
import { Experience } from "@/models/Experience";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const PUT = requireAuth(async (req, { params }) => {
    try {
        await connectDB();
        const { id } = await params;
        const data = await req.json();
        const experience = await Experience.findByIdAndUpdate(id, data, { new: true });
        if (!experience) return NextResponse.json({ error: "Experience not found" }, { status: 404 });
        revalidatePath("/");
        return NextResponse.json(experience);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update experience" }, { status: 500 });
    }
});

export const DELETE = requireAuth(async (req, { params }) => {
    try {
        await connectDB();
        const { id } = await params;
        const experience = await Experience.findByIdAndDelete(id);
        if (!experience) return NextResponse.json({ error: "Experience not found" }, { status: 404 });
        revalidatePath("/");
        return NextResponse.json({ message: "Experience deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete experience" }, { status: 500 });
    }
});
