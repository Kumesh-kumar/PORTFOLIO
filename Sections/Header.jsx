"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ profile }) => {
  return (
    <section className="min-h-[500px] flex items-center justify-center bg-[#020617] text-white py-20 px-6">
      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-[#38bdf8]">{profile?.name || "Kumesh"}</span> 
            <motion.span 
              animate={{ rotate: [0, 20, 0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              className="inline-block origin-bottom-right ml-3"
            >
              👋
            </motion.span>
          </h1>
          <p className="mt-6 text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            {profile?.tagline || "MERN Stack Developer building scalable web applications with React, Node.js & MongoDB."}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#0ea5e9]/20"
          >
            🚀 Projects
          </a>
          <a
            href={profile?.resume || "#"}
            target="_blank"
            className="flex items-center gap-2 px-8 py-3 bg-[#020617] border border-[#0ea5e9]/30 hover:border-[#0ea5e9] text-white rounded-xl font-bold transition-all group"
          >
            <span className="opacity-70 group-hover:opacity-100 italic font-normal">📄</span> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;