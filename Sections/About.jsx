"use client";
import { motion } from "framer-motion";

const About = ({ profile }) => {
    return (
        <section className="py-24 bg-[#020617] text-white px-6 md:px-10" id="about">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="grid lg:grid-cols-3 gap-12 items-center">

                    {/* LEFT SIDE (IMAGE) */}
                    {/* <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group lg:col-span-1"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#0ea5e9] to-[#6366f1] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                            {profile?.profileImage ? (
                                <img 
                                    src={profile.profileImage} 
                                    alt={profile.name}
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-110 hover:scale-100"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-700">
                                    <span className="text-4xl">👤</span>
                                </div>
                            )}
                        </div>
                    </motion.div> */}

                    {/* RIGHT SIDE (TEXT & STATS) */}
                    <div className="lg:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
                                <span className="text-4xl">👨‍💻</span> About Me
                            </h2>

                            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                                {profile?.aboutMe?.length > 0 ? (
                                    profile.aboutMe.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))
                                ) : (
                                    <p>React JS developer focused on building scalable web applications.</p>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4"
                        >
                            {(profile?.stats?.length > 0 ? profile.stats : [
                                { label: "Projects Built", value: "4+" },
                                { label: "Core Technology", value: "React" },
                                { label: "Integration Skills", value: "API" },
                                { label: "Modern Design", value: "UI" }
                            ]).map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-[#1e293b]/50 border border-white/5 p-6 rounded-2xl hover:border-[#0ea5e9]/30 transition-all group"
                                >
                                    <h3 className="text-xl font-bold text-[#0ea5e9] mb-1">{stat.value}</h3>
                                    <p className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        <div className="mt-6">
                            <a
                                href={profile?.resume || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#0284c7] transition-all shadow-lg shadow-[#0ea5e9]/20 group"
                            >
                                <span className="italic">📄</span> Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;