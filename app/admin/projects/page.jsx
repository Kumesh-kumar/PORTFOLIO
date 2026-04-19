"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, Globe, Github, Loader2, X, Upload, ExternalLink } from "lucide-react";
import { authFetch } from "@/services/adminApi";

export default function ProjectsAdmin() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        liveLink: "",
        githubLink: "",
        tags: "",
        category: ""
    });
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const data = await fetch("/api/projects").then(res => res.json());
            setProjects(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (proj = null) => {
        if (proj) {
            setEditingProject(proj);
            setFormData({
                ...proj,
                tags: Array.isArray(proj.tags) ? proj.tags.join(", ") : proj.tags
            });
        } else {
            setEditingProject(null);
            setFormData({ title: "", description: "", image: "", liveLink: "", githubLink: "", tags: "", category: "" });
        }
        setModalOpen(true);
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const fData = new FormData();
        fData.append("file", file);

        try {
            const data = await authFetch("/api/upload", {
                method: "POST",
                body: fData,
                headers: {}
            });
            setFormData(prev => ({ ...prev, image: data.url }));
        } catch (err) {
            alert("Upload failed");
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean)
        };

        try {
            if (editingProject) {
                await authFetch(`/api/projects/${editingProject._id}`, {
                    method: "PUT",
                    body: JSON.stringify(payload)
                });
            } else {
                await authFetch("/api/projects", {
                    method: "POST",
                    body: JSON.stringify(payload)
                });
            }
            setModalOpen(false);
            fetchProjects();
        } catch (err) {
            alert("Action failed");
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        try {
            await authFetch(`/api/projects/${id}`, { method: "DELETE" });
            fetchProjects();
        } catch (err) {
            alert("Delete failed");
        }
    };

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-sky-400 w-10 h-10" /></div>;

    return (
        <div className="space-y-8">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold font-heading">Projects</h1>
                    <p className="text-gray-400">Manage your showcase and portfolio work.</p>
                </div>
                <button 
                    onClick={() => handleOpenModal()}
                    className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 transition-all"
                >
                    <Plus className="w-4 h-4" /> Add Project
                </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence>
                    {projects.map((proj) => (
                        <motion.div 
                            key={proj._id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden group hover:border-sky-500/30 transition-all"
                        >
                            <div className="aspect-video relative overflow-hidden bg-black/40">
                                {proj.image ? (
                                    <img src={proj.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={proj.title} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-600">No Image</div>
                                )}
                                <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                    <button 
                                        onClick={() => handleOpenModal(proj)}
                                        className="p-2 bg-black/60 backdrop-blur-md rounded-lg text-white hover:bg-sky-500 transition-colors"
                                    >
                                        <Pencil className="w-4 h-4" />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(proj._id)}
                                        className="p-2 bg-black/60 backdrop-blur-md rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">{proj.title}</h3>
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/5 px-2 py-1 rounded text-gray-400">{proj.category || 'General'}</span>
                                </div>
                                <p className="text-gray-400 text-sm line-clamp-2 mb-4">{proj.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-3">
                                        {proj.liveLink && <a href={proj.liveLink} target="_blank" className="text-gray-500 hover:text-sky-400 transition-colors"><Globe className="w-4 h-4" /></a>}
                                        {proj.githubLink && <a href={proj.githubLink} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>}
                                    </div>
                                    <div className="flex flex-wrap gap-1 justify-end">
                                        {proj.tags?.slice(0, 2).map((tag, i) => (
                                            <span key={i} className="text-[10px] border border-white/5 text-gray-500 px-2 py-0.5 rounded">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setModalOpen(false)}
                        />
                        <motion.div 
                            initial={{ opacity: 0, y: 100, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.95 }}
                            className="relative w-full max-w-2xl bg-[#1e293b] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                <h2 className="text-xl font-bold">{editingProject ? "Edit Project" : "Add New Project"}</h2>
                                <button onClick={() => setModalOpen(false)} className="p-2 hover:bg-white/5 rounded-full"><X className="w-5 h-5" /></button>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="p-8 max-h-[70vh] overflow-y-auto space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm text-gray-400 mb-2">Project Title</label>
                                        <input 
                                            required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                                        />
                                    </div>
                                    
                                    <div className="md:col-span-2">
                                        <label className="block text-sm text-gray-400 mb-2">Image</label>
                                        <div className="flex gap-4 items-center">
                                            <div className="w-24 h-24 rounded-xl bg-black/20 border border-white/5 overflow-hidden">
                                                {formData.image ? <img src={formData.image} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-gray-700 text-xs text-center">No Image</div>}
                                            </div>
                                            <label className="flex-1 cursor-pointer bg-black/20 border border-white/10 border-dashed rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/5 transition-all">
                                                <input type="file" className="hidden" onChange={handleFileUpload} />
                                                <Upload className="w-6 h-6 mb-2 text-gray-500" />
                                                <span className="text-xs text-gray-500">{uploading ? "Uploading..." : "Click to upload image"}</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm text-gray-400 mb-2">Description</label>
                                        <textarea 
                                            required rows="3" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">Live Demo URL</label>
                                        <input 
                                            value={formData.liveLink} onChange={(e) => setFormData({...formData, liveLink: e.target.value})}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">GitHub Repo URL</label>
                                        <input 
                                            value={formData.githubLink} onChange={(e) => setFormData({...formData, githubLink: e.target.value})}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">Tags (comma separated)</label>
                                        <input 
                                            value={formData.tags} onChange={(e) => setFormData({...formData, tags: e.target.value})}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                                            placeholder="React, Node.js, Tailwind"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">Category</label>
                                        <input 
                                            value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
                                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-all"
                                            placeholder="Fullstack, Frontend, etc."
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button 
                                        type="button" onClick={() => setModalOpen(false)}
                                        className="flex-1 px-6 py-4 rounded-2xl bg-white/5 font-bold hover:bg-white/10 transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        type="submit"
                                        className="flex-1 px-6 py-4 rounded-2xl bg-sky-500 font-bold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
                                    >
                                        {editingProject ? "Update Project" : "Create Project"}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}