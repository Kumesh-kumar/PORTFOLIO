"use client"
import { motion, useInView } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import React, { useRef } from 'react'


const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const achievements = [
        "Built scalable applications with 99.9% uptime serving thousands of users",
        "Successfully handled 1000+ concurrent users with optimized performance",
        "Optimized APIs and database queries, reducing response time by 40%",
        "Improved frontend performance using lazy loading and code splitting techniques",
        "Implemented JWT-based authentication and authorization systems",
        "Collaborated with cross-functional teams in Agile/Scrum environment",
        "Developed RESTful APIs with comprehensive error handling and validation",
        "Maintained clean code standards and thorough documentation"
    ];
    return (
        <section id="experience" className="py-20 bg-slate-50" ref={ref}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">Experience</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

                        {/* Experience Card */}
                        <div className="relative pl-0 md:pl-20 mb-8">
                            {/* Timeline dot */}
                            <div className="absolute left-6 top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-blue-500 text-white rounded-lg">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl text-slate-900 mb-1">
                                            MERN Stack Developer
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2 text-slate-600 mb-2">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                                                Aiifiox
                                            </span>
                                            <span className="text-sm">Jan 2025 - Jan 2026</span>

                                        </div>
                                        <p className="text-slate-600">
                                            Mohali, Punjab, India
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="text-slate-900 mb-3">Key Achievements:</h4>
                                    <div className="space-y-3">
                                        {achievements.map((achievement, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <p className="text-slate-700">{achievement}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-slate-200">
                                    <h4 className="text-slate-900 mb-3">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {["React", "Node.js", "Express", "MongoDB", "MySQL", "Redux", "REST APIs", "Microservices", "JWT", "Git"].map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* You can add more experience entries here following the same pattern */}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Experience