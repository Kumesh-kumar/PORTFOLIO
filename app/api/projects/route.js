import connectDB from "@/lib/mongodb";
import { Project } from "@/models/Project";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// GET all projects
export async function GET() {
    try {
        await connectDB();
        const projects = await Project.find().sort({ order: 1, createdAt: -1 });
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}

// CREATE new project (Protected)
export const POST = requireAuth(async (req) => {
    try {
        await connectDB();
        const data = await req.json();
        const project = await Project.create(data);
        revalidatePath("/");
        return NextResponse.json(project, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
    }
});