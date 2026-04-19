import mongoose from "mongoose";

export const User = mongoose.models.User || mongoose.model("User", new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true }));
