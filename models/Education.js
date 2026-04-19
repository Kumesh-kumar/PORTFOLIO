import mongoose from "mongoose";

export const Education = mongoose.models.Education || mongoose.model("Education", new mongoose.Schema({
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    location: String,
    startDate: String,
    endDate: String,
    grade: String,
    description: [String],
    order: { type: Number, default: 0 }
}, { timestamps: true }));
