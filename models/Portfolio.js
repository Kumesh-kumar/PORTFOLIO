import mongoose from "mongoose";

export const Portfolio = mongoose.models.Portfolio || mongoose.model("Portfolio", new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    tagline: String,
    bio: String,
    aboutMe: [String],
    profileImage: String,
    resume: String,
    socialLinks: {
        github: String,
        linkedin: String,
        twitter: String,
        instagram: String,
        facebook: String,
        email: String,
        whatsapp: String
    },
    stats: [{
        label: String,
        value: String
    }],
    contactInfo: {
        email: String,
        phone: String,
        address: String
    }
}, { timestamps: true }));