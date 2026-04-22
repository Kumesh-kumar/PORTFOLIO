import connectDB from "@/lib/mongodb";
import { Project } from "@/models/Project";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const PUT = requireAuth(async (req, { params }) => {
    try {
        await connectDB();
        const { id } = await params;
        const data = await req.json();
        
        const project = await Project.findByIdAndUpdate(id, data, { new: true });
        if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });
        
        
        revalidatePath("/");
        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
    }
});

export const DELETE = requireAuth(async (req, { params }) => {
    try {
        await connectDB();
        const { id } = await params;
        
        const project = await Project.findByIdAndDelete(id);
        if (!project) return NextResponse.json({ error: "Project not found" }, { status: 404 });
        
        
        revalidatePath("/");
        return NextResponse.json({ message: "Project deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
    }
});
