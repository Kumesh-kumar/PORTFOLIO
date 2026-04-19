"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Check, Trophy } from 'lucide-react';

const Experience = ({ experiences }) => {
    return (
        <section className="py-24 bg-[#020617] text-white px-6" id="experience">
            <div className="max-w-4xl mx-auto space-y-16">
                <header className="text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold flex items-center justify-center gap-4"
                    >
                        💼 Experience & Achievements
                    </motion.h2>
                </header>

                <div className="space-y-12">
                    {experiences?.length > 0 ? experiences.map((exp, i) => (
                        <motion.div 
                            key={exp._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-[#1e293b]/30 p-10 rounded-3xl border border-white/5 space-y-8"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#38bdf8]">{exp.role} <span className="text-slate-400 font-medium">— {exp.company}</span></h3>
                                    <p className="text-slate-500 text-sm mt-2 font-medium">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {exp.description?.map((point, idx) => (
                                    <li key={idx} className="flex gap-4 text-slate-300 leading-relaxed font-normal">
                                        <Check className="w-5 h-5 text-[#6366f1] shrink-0 mt-1" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Key Achievement section matching image 6 */}
                            <div className="bg-[#1e293b]/50 border border-[#38bdf8]/10 p-6 rounded-2xl space-y-3">
                                <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-sm uppercase tracking-wider">
                                    <Trophy className="w-5 h-5 text-amber-500" /> Key Achievement
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {exp.keyAchievement || "Successfully delivered high-impact features and received recognition for ownership and technical contributions."}
                                </p>
                            </div>
                        </motion.div>
                    )) : (
                        <p className="text-gray-500 text-center italic py-10">Experience details coming soon...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;