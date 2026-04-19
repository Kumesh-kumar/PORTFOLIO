import cloudinary from "@/lib/cloudinary";
import { requireAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

export const POST = requireAuth(async (req) => {
    try {
        const formData = await req.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Detect if it's a PDF for internal logging or future use
        const isPDF = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
        
        // Use "auto" which is generally the most reliable for mixed media
        const uploadOptions = {
            resource_type: "auto",
            folder: "portfolio_assets",
            use_filename: true,
            unique_filename: true,
            access_mode: "public"
        };

        // Upload to Cloudinary
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                uploadOptions,
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        });

        // Ensure the secure_url is returned
        return NextResponse.json({
            url: result.secure_url,
            public_id: result.public_id
        });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
    }
});