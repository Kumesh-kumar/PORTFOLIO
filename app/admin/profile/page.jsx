"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Save, Upload, Loader2, Plus, X } from "lucide-react";
import { authFetch } from "@/services/adminApi";

export default function ProfileAdmin() {
    const [profile, setProfile] = useState({
        name: "",
        title: "",
        tagline: "",
        bio: "",
        aboutMe: [""],
        profileImage: "",
        resume: "",
        socialLinks: {
            github: "",
            linkedin: "",
            twitter: "",
            instagram: "",
            email: ""
        },
        contactInfo: {
            email: "",
            phone: "",
            address: ""
        },
        stats: [
            { label: "Projects Built", value: "" },
            { label: "Core Technology", value: "" },
            { label: "Integration Skills", value: "" },
            { label: "Modern Design", value: "" }
        ]
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await fetch("/api/portfolio").then(res => res.json());
                if (data && data._id) {
                    setProfile(prev => ({ ...prev, ...data }));
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleFileUpload = async (e, field) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(field);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const data = await authFetch("/api/upload", {
                method: "POST",
                body: formData,
                headers: {}, // Remove content-type for multipart
            });
            setProfile(prev => ({ ...prev, [field]: data.url }));
        } catch (err) {
            alert("Upload failed");
        } finally {
            setUploading(null);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await authFetch("/api/portfolio", {
                method: "PUT",
                body: JSON.stringify(profile)
            });
            alert("Profile updated successfully!");
        } catch (err) {
            alert("Failed to update profile");
        } finally {
            setSaving(false);
        }
    };

    const updateStat = (index, field, val) => {
        const newStats = [...profile.stats];
        if (!newStats[index]) newStats[index] = { label: "", value: "" };
        newStats[index][field] = val;
        setProfile({ ...profile, stats: newStats });
    };

    const updateAboutMe = (index, val) => {
        const newAbout = [...profile.aboutMe];
        newAbout[index] = val;
        setProfile({ ...profile, aboutMe: newAbout });
    };

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-sky-400 w-10 h-10" /></div>;

    return (
        <div className="space-y-8 pb-20">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Profile Settings</h1>
                    <p className="text-gray-400">Manage your basic information and branding.</p>
                </div>
                <button 
                    onClick={handleSave}
                    disabled={saving}
                    className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-all disabled:opacity-50"
                >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    Save Changes
                </button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Image & Assets */}
                <div className="space-y-8">
                    <section className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 p-6 rounded-3xl">
                        <h2 className="text-lg font-bold mb-4">Profile Image</h2>
                        <div className="aspect-square rounded-2xl bg-black/40 overflow-hidden mb-4 relative group">
                            {profile.profileImage ? (
                                <img src={profile.profileImage} className="w-full h-full object-cover" alt="Profile" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">No Image</div>
                            )}
                            <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity">
                                <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, "profileImage")} />
                                <div className="text-center">
                                    <Upload className="w-8 h-8 mx-auto mb-2" />
                                    <span className="text-sm">Change Image</span>
                                </div>
                            </label>
                            {uploading === "profileImage" && (
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-sm">
                                    <Loader2 className="animate-spin text-sky-400" />
                                </div>
                            )}
                        </div>
                    </section>

                    <section className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 p-6 rounded-3xl">
                        <h2 className="text-lg font-bold mb-4">Resume PDF</h2>
                        <div className="flex items-center gap-4 p-4 bg-black/20 border border-white/5 rounded-xl">
                            <label className="cursor-pointer bg-white/5 hover:bg-white/10 p-3 rounded-lg transition-colors">
                                <input type="file" className="hidden" onChange={(e) => handleFileUpload(e, "resume")} />
                                <Upload className="w-5 h-5" />
                            </label>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{profile.resume ? "Resume uploaded" : "No resume uploaded"}</p>
                                {profile.resume && <a href={profile.resume} target="_blank" className="text-xs text-sky-400 hover:underline">View Current</a>}
                            </div>
                            {uploading === "resume" && <Loader2 className="w-4 h-4 animate-spin text-sky-400" />}
                        </div>
                    </section>
                </div>

                {/* Right Column - Info */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl">
                        <h2 className="text-lg font-bold mb-6">Basic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm text-gray-400 mb-2">Display Name</label>
                                <input 
                                    value={profile.name} 
                                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Professional Title</label>
                                <input 
                                    value={profile.title} 
                                    onChange={(e) => setProfile({...profile, title: e.target.value})}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Hero Tagline</label>
                                <input 
                                    value={profile.tagline} 
                                    onChange={(e) => setProfile({...profile, tagline: e.target.value})}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400" 
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm text-gray-400 mb-2">Short Bio</label>
                                <textarea 
                                    rows="3"
                                    value={profile.bio} 
                                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400" 
                                />
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl">
                        <h2 className="text-lg font-bold mb-6">About Metrics (Stats Grid)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {(profile.stats || []).map((stat, i) => (
                                <div key={i} className="space-y-3 p-4 bg-black/20 rounded-2xl border border-white/5">
                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">Metric Value (e.g. 4+)</label>
                                        <input 
                                            value={stat.value} 
                                            onChange={(e) => updateStat(i, "value", e.target.value)}
                                            className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-sky-400" 
                                            placeholder="Value"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-gray-400 mb-1">Label (e.g. Projects Built)</label>
                                        <input 
                                            value={stat.label} 
                                            onChange={(e) => updateStat(i, "label", e.target.value)}
                                            className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-sky-400" 
                                            placeholder="Label"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold">About Me Section</h2>
                            <button 
                                onClick={() => setProfile({...profile, aboutMe: [...profile.aboutMe, ""]})}
                                className="text-sky-400 flex items-center gap-1 text-sm hover:underline"
                            >
                                <Plus className="w-4 h-4" /> Add Paragraph
                            </button>
                        </div>
                        <div className="space-y-4">
                            {profile.aboutMe.map((para, i) => (
                                <div key={i} className="relative group">
                                    <textarea 
                                        rows="4"
                                        value={para}
                                        onChange={(e) => updateAboutMe(i, e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400"
                                        placeholder={`Paragraph ${i + 1}...`}
                                    />
                                    <button 
                                        onClick={() => setProfile({...profile, aboutMe: profile.aboutMe.filter((_, idx) => idx !== i)})}
                                        className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 p-1 hover:bg-red-500/10 rounded transition-all"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl">
                        <h2 className="text-lg font-bold mb-6">Social Links</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.keys(profile.socialLinks).map((key) => (
                                <div key={key}>
                                    <label className="block text-sm text-gray-400 mb-2 capitalize">{key}</label>
                                    <input 
                                        value={profile.socialLinks[key]} 
                                        onChange={(e) => setProfile({
                                            ...profile, 
                                            socialLinks: { ...profile.socialLinks, [key]: e.target.value }
                                        })}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400" 
                                        placeholder={`https://${key}.com/your-profile`}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl">
                        <h2 className="text-lg font-bold mb-6">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                                <input 
                                    value={profile.contactInfo.phone} 
                                    onChange={(e) => setProfile({
                                        ...profile, 
                                        contactInfo: { ...profile.contactInfo, phone: e.target.value }
                                    })}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400" 
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-2">Location/Address</label>
                                <input 
                                    value={profile.contactInfo.address} 
                                    onChange={(e) => setProfile({
                                        ...profile, 
                                        contactInfo: { ...profile.contactInfo, address: e.target.value }
                                    })}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400" 
                                    placeholder="City, State, Country"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}