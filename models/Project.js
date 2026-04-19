import mongoose from "mongoose";

export const Project = mongoose.models.Project || mongoose.model("Project", new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
    liveLink: String,
    githubLink: String,
    tags: [String],
    category: String,
    order: { type: Number, default: 0 }
}, { timestamps: true }));