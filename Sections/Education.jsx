"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = ({ education }) => {
    return (
        <section className="py-24 bg-[#020617] text-white px-6" id="education">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-2"
                    >
                        Education
                    </motion.h2>
                    <div className="w-20 h-1 bg-[#0ea5e9] mx-auto rounded-full" />
                </header>

                <div className="relative border-l-2 border-[#6366f1]/30 ml-4 md:ml-20 space-y-12 pb-10">
                    {education?.length > 0 ? education.map((edu, i) => (
                        <motion.div 
                            key={edu._id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute left-[-11px] top-6 w-5 h-5 rounded-full bg-white border-4 border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />
                            
                            {/* Card style matching image 3 */}
                            <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-xl relative group">
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="w-14 h-14 rounded-xl bg-[#3b82f6] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                                        <GraduationCap className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl md:text-2xl font-bold text-slate-800">{edu.degree}</h3>
                                            <span className="text-sm font-semibold text-slate-400">{edu.endDate?.split(' ').slice(-1)[0]}</span>
                                        </div>
                                        <p className="text-slate-500 font-medium text-lg mt-1">{edu.institution}</p>
                                        <p className="text-slate-500 mt-4 leading-relaxed font-normal">
                                            {edu.description?.join(' ') || "Comprehensive foundation in computer science, programming, and software development"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )) : (
                        <p className="text-gray-500 text-center italic">Education details coming soon...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Education;