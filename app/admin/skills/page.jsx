"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Loader2, Code2, Database, Layout, Hammer, Star, X } from "lucide-react";
import { authFetch } from "@/services/adminApi";

const CATEGORIES = ['Frontend', 'Backend', 'Database', 'Tools', 'Other'];

export default function SkillsAdmin() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", category: "Frontend", level: 80 });

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const data = await fetch("/api/skills").then(res => res.json());
            setSkills(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authFetch("/api/skills", {
                method: "POST",
                body: JSON.stringify(formData)
            });
            setModalOpen(false);
            setFormData({ name: "", category: "Frontend", level: 80 });
            fetchSkills();
        } catch (err) {
            alert("Failed to add skill");
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Delete this skill?")) return;
        try {
            await authFetch(`/api/skills/${id}`, { method: "DELETE" });
            fetchSkills();
        } catch (err) {
            alert("Delete failed");
        }
    };

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-sky-400 w-10 h-10" /></div>;

    return (
        <div className="space-y-8">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Skills & Technologies</h1>
                    <p className="text-gray-400">Manage your technical stack and proficiency.</p>
                </div>
                <button 
                    onClick={() => setModalOpen(true)}
                    className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-all"
                >
                    <Plus className="w-4 h-4" /> Add Skill
                </button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {CATEGORIES.map(cat => {
                    const catSkills = skills.filter(s => s.category === cat);
                    return (
                        <section key={cat} className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 p-6 rounded-3xl">
                            <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-sky-400">
                                {cat === 'Frontend' && <Layout className="w-5 h-5" />}
                                {cat === 'Backend' && <Database className="w-5 h-5" />}
                                {cat === 'Database' && <Code2 className="w-5 h-5" />}
                                {cat === 'Tools' && <Hammer className="w-5 h-5" />}
                                {cat === 'Other' && <Star className="w-5 h-5" />}
                                {cat}
                            </h2>
                            <div className="space-y-4">
                                {catSkills.length > 0 ? catSkills.map(skill => (
                                    <div key={skill._id} className="flex items-center gap-4 group">
                                        <div className="flex-1">
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-gray-500">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    className="h-full bg-sky-500"
                                                />
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => handleDelete(skill._id)}
                                            className="p-2 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400 transition-all"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                )) : <p className="text-xs text-gray-500 italic">No skills in this category</p>}
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setModalOpen(false)}
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-md bg-[#1e293b] border border-white/10 rounded-3xl p-8 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold">Add New Skill</h2>
                                <button onClick={() => setModalOpen(false)}><X className="w-5 h-5" /></button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Skill Name</label>
                                    <input 
                                        required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400"
                                        placeholder="e.g. React.js"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Category</label>
                                    <select 
                                        value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400 appearance-none"
                                    >
                                        {CATEGORIES.map(c => <option key={c} value={c} className="bg-[#1e293b]">{c}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">Proficiency ({formData.level}%)</label>
                                    <input 
                                        type="range" min="0" max="100" 
                                        value={formData.level} onChange={(e) => setFormData({...formData, level: parseInt(e.target.value)})}
                                        className="w-full accent-sky-500 h-1.5 bg-white/5 rounded-full"
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full py-3 bg-sky-500 hover:bg-sky-400 rounded-xl font-bold transition-all shadow-lg shadow-sky-500/20"
                                >
                                    Add Skill
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
