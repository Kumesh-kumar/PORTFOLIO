import connectDB from "@/lib/mongodb";
import { Portfolio } from "@/models/Portfolio";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

// GET public portfolio data
export async function GET() {
    try {
        await connectDB();
        const portfolio = await Portfolio.findOne();
        return NextResponse.json(portfolio || {});
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch portfolio" }, { status: 500 });
    }
}

// UPDATE portfolio data (Protected)
export const PUT = requireAuth(async (req) => {
    try {
        await connectDB();
        let { _id, ...updateData } = await req.json();
        
        let portfolio = await Portfolio.findOne();
        
        if (portfolio) {
            portfolio = await Portfolio.findByIdAndUpdate(portfolio._id, updateData, { new: true });
        } else {
            portfolio = await Portfolio.create(updateData);
        }
        
        return NextResponse.json(portfolio);
    } catch (error) {
        console.error("Portfolio update error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
});