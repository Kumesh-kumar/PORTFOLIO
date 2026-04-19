import mongoose from "mongoose";

export const Message = mongoose.models.Message || mongoose.model("Message", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: String,
    message: { type: String, required: true },
    status: { type: String, enum: ['unseen', 'seen', 'replied'], default: 'unseen' }
}, { timestamps: true }));