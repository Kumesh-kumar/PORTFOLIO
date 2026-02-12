"use client"
import { useInView, motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import React, { useRef } from 'react'

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const education = [
        {
            icon: <GraduationCap className="w-6 h-6" />,
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "DAV College, Chandigarh",
            year: "2024",
            description: "Comprehensive foundation in computer science, programming, and software development",
            color: "blue"
        },
        {
            icon: <Award className="w-6 h-6" />,
            degree: "MERN Stack Developer Certification",
            institution: "Netmax Technologies",
            year: "2025",
            description: "Specialized training in MongoDB, Express, React, and Node.js full-stack development",
            color: "slate"
        }
    ];

    return (
        <section id="education" className="py-20 bg-slate-50" ref={ref}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">Education</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

                        <div className="space-y-8">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative pl-0 md:pl-20"
                                >
                                    {/* Timeline dot */}
                                    <div
                                        className={`absolute left-6 top-6 w-4 h-4 bg-${item.color}-500 rounded-full border-4 border-white shadow-lg hidden md:block`}
                                    ></div>

                                    <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 bg-${item.color}-500 text-white rounded-lg flex-shrink-0`}>
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                    <h3 className="text-xl text-slate-900">
                                                        {item.degree}
                                                    </h3>
                                                    <span className={`px-3 py-1 bg-${item.color}-50 text-${item.color}-700 rounded-full text-sm`}>
                                                        {item.year}
                                                    </span>
                                                </div>
                                                <p className="text-slate-700 mb-2">
                                                    {item.institution}
                                                </p>
                                                <p className="text-slate-600 text-sm">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education