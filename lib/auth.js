import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const verifyToken = (req) => {
    try {
        const authHeader = req.headers.get("authorization");
        if (!authHeader) return null;

        const token = authHeader.split(" ")[1];
        if (!token) return null;

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (err) {
        return null;
    }
};

export const requireAuth = (handler) => {
    return async (req, context) => {
        const user = verifyToken(req);

        if (!user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        return handler(req, context, user);
    };
};