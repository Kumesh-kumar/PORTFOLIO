"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Eye } from "lucide-react";

const CTA = ({ profile }) => {
    return (
        <section className="py-24 bg-[#020617] text-white px-6">
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Available for Immediate Joining | <span className="text-slate-400">React Developer</span>
                    </h2>

                    <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        I build fast, scalable, and user-friendly web applications using React and the MERN stack.
                        Currently looking for opportunities where I can deliver real impact and grow as a developer.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-6"
                >
                    <a
                        href={`mailto:${profile?.socialLinks?.email}`}
                        className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all shadow-lg shadow-[#0ea5e9]/20"
                    >
                        <Mail className="w-5 h-5" /> Hire Me
                    </a>

                    {profile?.contactInfo?.phone && (
                        <a
                            href={`tel:${profile.contactInfo.phone}`}
                            className="bg-[#1e293b]/50 border border-white/5 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/5 transition-all"
                        >
                            <Phone className="w-5 h-5 text-indigo-400" /> Call Me
                        </a>
                    )}

                    {profile?.socialLinks?.linkedin && (
                        <a
                            href={profile.socialLinks.linkedin}
                            target="_blank"
                            className="bg-[#1e293b]/50 border border-white/5 text-slate-400 px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-white/5 hover:text-white transition-all"
                        >
                            <Linkedin className="w-5 h-5 text-red-400" /> LinkedIn
                        </a>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;