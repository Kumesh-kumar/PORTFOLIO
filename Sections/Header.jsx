"use client";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <section className="h-[400px] sm:h-screen flex items-center justify-center bg-[#020617] text-white px-6">
            <div className="text-center max-w-3xl">

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Hi, I'm <span className="text-sky-400">Kumesh</span> 👋
                </motion.h1>

                <p className="text-gray-400 mt-4 text-lg">
                    MERN Stack Developer building scalable web applications with React, Node.js & MongoDB.
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <a href="#projects" className="bg-sky-400 text-black px-6 py-3 rounded-xl font-semibold">
                        🚀 Projects
                    </a>

                    <a href="/resume.pdf" rel="noopener noreferrer" target="_blank" className="border border-sky-400 px-6 py-3 rounded-xl">
                        📄 Resume
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Header;