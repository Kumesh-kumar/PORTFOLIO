import connectDB from "@/lib/mongodb";
import { Education } from "@/models/Education";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const PUT = requireAuth(async (req, { params }) => {
    try {
        await connectDB();
        const { id } = await params;
        const data = await req.json();
        const education = await Education.findByIdAndUpdate(id, data, { new: true });
        if (!education) return NextResponse.json({ error: "Education not found" }, { status: 404 });
        revalidatePath("/");
        return NextResponse.json(education);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update education" }, { status: 500 });
    }
});

export const DELETE = requireAuth(async (req, { params }) => {
    try {
        await connectDB();
        const { id } = await params;
        const education = await Education.findByIdAndDelete(id);
        if (!education) return NextResponse.json({ error: "Education not found" }, { status: 404 });
        revalidatePath("/");
        return NextResponse.json({ message: "Education deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete education" }, { status: 500 });
    }
});
