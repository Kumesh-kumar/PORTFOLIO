"use client";
import { motion } from "framer-motion";
import { Link as LinkIcon, Check } from "lucide-react";

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="py-24 bg-[#020617] text-white px-6">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4 flex items-center justify-center gap-3"
                    >
                        🚀 Projects
                    </motion.h2>
                    <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full" />
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects?.length > 0 ? projects.map((proj, i) => (
                        <motion.div 
                            key={proj._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 rounded-3xl bg-[#1e293b]/40 border ${i === 0 ? 'border-[#0ea5e9]' : 'border-white/5'} transition-all hover:bg-[#1e293b]/60 relative group`}
                        >
                            <h3 className="text-2xl font-bold text-[#38bdf8] mb-4">{proj.title}</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                {proj.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {proj.tags?.map((tag, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                                        <Check className="w-4 h-4 text-[#6366f1]" /> {tag}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                {proj.liveLink && (
                                    <a 
                                        href={proj.liveLink} 
                                        target="_blank" 
                                        className="inline-flex items-center gap-2 text-[#38bdf8] font-medium hover:underline text-sm"
                                    >
                                        <LinkIcon className="w-4 h-4" /> Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    )) : (
                        <p className="text-gray-500 col-span-2 text-center py-20 italic">Projects are coming soon...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;