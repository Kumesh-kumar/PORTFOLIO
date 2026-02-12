"use client"
import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["JavaScript", "HTML", "CSS"]
        },
        {
            title: "Frontend Technologies",
            skills: ["React.js", "Redux", "Tailwind CSS", "Next.js", "Vite", "Responsive Design"]
        },
        {
            title: "Backend Technologies",
            skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Microservices"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "MySQL", "Mongoose"]
        },
        {
            title: "Tools & Platforms",
            skills: ["GitHub", "Postman", "VS Code", "npm"]
        }
    ];

    return (
        <section id="skill" className="py-20 bg-white" ref={ref}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">Skills & Expertise</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable web applications
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl mb-4 text-slate-900 border-b border-slate-300 pb-3">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                        className="px-3 py-1.5 bg-white text-slate-700 text-sm rounded-full border border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 grid grid-cols-1  sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
                >
                    <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
                        <div className="text-3xl mb-2">1+</div>
                        <div className="text-blue-100">Years Experience</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white">
                        <div className="text-3xl mb-2">99.9%</div>
                        <div className="text-purple-100">Uptime Achieved</div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}

export default Skills