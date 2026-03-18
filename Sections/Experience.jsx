"use client";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section className="py-20 bg-[#020617] text-white px-6 md:px-16">
            <div className="max-w-5xl mx-auto">

                {/* HEADING */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    💼 Experience & Achievements
                </h2>

                {/* CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-lg"
                >

                    {/* ROLE + COMPANY */}
                    <h3 className="text-xl md:text-2xl font-semibold text-sky-400">
                        React / MERN Developer — Aiinfox
                    </h3>

                    {/* DURATION */}
                    <p className="text-gray-400 mt-1">
                        Jan 2025 - Jan 2026
                    </p>

                    {/* WORK */}
                    <ul className="mt-6 space-y-3 text-gray-300">
                        <li>✔ Delivered the <span className="text-white font-semibold">Shikharpe platform</span> successfully within deadlines.</li>

                        <li>✔ Built scalable UI using React.js with <span className="text-white font-semibold">40+ reusable components</span>.</li>

                        <li>✔ Integrated APIs using Node.js & MongoDB for smooth full-stack functionality.</li>

                        <li>✔ Improved performance and reduced response time by optimizing API calls.</li>

                        <li>✔ Delivered <span className="text-white font-semibold">15+ features</span> without critical bugs.</li>
                    </ul>

                    {/* ACHIEVEMENT BLOCK */}
                    <div className="mt-8 p-5 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-400/20 rounded-xl">

                        <h4 className="text-lg font-semibold text-sky-300">
                            🏆 Key Achievement
                        </h4>

                        <p className="text-gray-300 mt-2">
                            Awarded <span className="text-white font-semibold">“Ownership Hero”</span> in October
                            for taking full ownership and successfully delivering complex tasks in the Shikharpe project.
                        </p>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Experience;