import mongoose from "mongoose";

export const Experience = mongoose.models.Experience || mongoose.model("Experience", new mongoose.Schema({
    role: { type: String, required: true },
    company: { type: String, required: true },
    location: String,
    startDate: String,
    endDate: String,
    current: { type: Boolean, default: false },
    description: [String],
    keyAchievement: String,
    order: { type: Number, default: 0 }
}, { timestamps: true }));
