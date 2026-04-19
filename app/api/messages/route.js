import connectDB from "@/lib/mongodb";
import { Message } from "@/models/Message";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

// Public POST to send message
export async function POST(req) {
    try {
        await connectDB();
        const data = await req.json();
        const message = await Message.create(data);
        return NextResponse.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}

// Protected GET to fetch messages
export const GET = requireAuth(async () => {
    try {
        await connectDB();
        const messages = await Message.find().sort({ createdAt: -1 });
        return NextResponse.json(messages);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
    }
});

// Protected DELETE to remove message
export const DELETE = requireAuth(async (req) => {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        
        if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });
        
        const message = await Message.findByIdAndDelete(id);
        if (!message) return NextResponse.json({ error: "Message not found" }, { status: 404 });
        
        return NextResponse.json({ message: "Message deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
    }
});
