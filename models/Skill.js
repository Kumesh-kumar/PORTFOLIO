import mongoose from "mongoose";

export const Skill = mongoose.models.Skill || mongoose.model("Skill", new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ['Frontend', 'Backend', 'Database', 'Tools', 'Other'], default: 'Tools' },
    level: { type: Number, min: 0, max: 100 }, // Percentage
    icon: String, order: { type: Number, default: 0 }
}, { timestamps: true }));