"use client";
import { motion } from "framer-motion";

const Skills = ({ skills }) => {
    const categories = ['Frontend', 'Backend', 'Database', 'Tools'];
    
    const groupedSkills = categories.reduce((acc, cat) => {
        const filtered = skills?.filter(s => s.category === cat) || [];
        if (filtered.length > 0) acc[cat] = filtered;
        return acc;
    }, {});

    return (
        <section className="py-24 bg-[#020617] text-white px-6 md:px-16" id="skills">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Skills
                    </motion.h2>
                    <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full" />
                </header>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, i) => {
                        const items = groupedSkills[category] || [];
                        return (
                            <motion.div 
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[#1e293b]/40 border border-white/5 p-8 rounded-2xl hover:border-[#0ea5e9]/20 transition-all group min-h-[220px]"
                            >
                                <h3 className="text-[#0ea5e9] font-bold text-lg mb-6">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.length > 0 ? items.map((skill, idx) => (
                                        <div 
                                            key={idx} 
                                            className="bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 px-3 py-1.5 text-xs text-[#38bdf8] rounded-full font-medium"
                                        >
                                            {skill.name}
                                        </div>
                                    )) : (
                                        <span className="text-gray-600 italic text-sm">Coming soon...</span>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;