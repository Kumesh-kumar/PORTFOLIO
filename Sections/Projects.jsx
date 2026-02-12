"use client"
import { useInView, motion } from 'framer-motion';
import { Database, ExternalLink, Github, Server, Shield, Zap } from 'lucide-react';
import React, { useRef } from 'react'

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "B2B E-Commerce Platform",
            description:
                "A comprehensive B2B e-commerce solution designed to handle high-concurrency transactions with real-time inventory management and secure authentication.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "MySQL", "Microservices"],
            features: [
                { icon: <Server className="w-4 h-4" />, text: "Microservices architecture" },
                { icon: <Database className="w-4 h-4" />, text: "Real-time inventory tracking" },
                { icon: <Shield className="w-4 h-4" />, text: "Secure JWT authentication" },
                { icon: <Zap className="w-4 h-4" />, text: "Advanced filtering & pagination" }
            ],
            highlights: [
                "Handles 1000+ concurrent users with optimized performance",
                "Implemented robust error handling and data validation",
                "Achieved 99.9% uptime with scalable infrastructure",
                "Reduced API response time by 40% through query optimization"
            ],
            liveDemo: process.env.NEXT_PUBLIC_PROJECT_B2B_LIVE,
            sourceCode: process.env.NEXT_PUBLIC_PROJECT_B2B_SOURCE,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Video Streaming Platform (Netflix Clone)",
            description:
                "A feature-rich video streaming platform with a modern, responsive UI that delivers smooth user experiences with optimized API calls and lazy loading.",
            technologies: ["React", "Redux", "Tailwind CSS", "TMDB API", "Axios"],
            features: [
                { icon: <Zap className="w-4 h-4" />, text: "Lazy loading & code splitting" },
                { icon: <Server className="w-4 h-4" />, text: "Optimized API integration" },
                { icon: <Database className="w-4 h-4" />, text: "Efficient state management" },
                { icon: <Shield className="w-4 h-4" />, text: "Reusable component library" }
            ],
            highlights: [
                "Implemented Redux for centralized state management",
                "Optimized performance with React.lazy() and Suspense",
                "Integrated TMDB API with efficient caching strategy",
                "Built responsive UI with Tailwind CSS for all screen sizes"
            ],
            liveDemo: process.env.NEXT_PUBLIC_PROJECT_NETFLIX_LIVE,
            sourceCode: process.env.NEXT_PUBLIC_PROJECT_NETFLIX_SOURCE,
            gradient: "from-purple-500 to-pink-500"
        }
    ];
    return (
        <section id="projects" className="py-20 bg-white" ref={ref}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Building production-ready applications that solve real-world problems
                    </p>
                </motion.div>

                <div className="space-y-12 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-slate-50 rounded-2xl overflow-hidden shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow"
                        >
                            {/* Header with gradient */}
                            <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white`}>
                                <h3 className="text-3xl mb-3">{project.title}</h3>
                                <p className="text-white/90 text-lg">{project.description}</p>
                            </div>

                            <div className="p-8">
                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="text-slate-900 mb-3">Tech Stack:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-4 py-2 bg-white text-slate-700 rounded-lg border border-slate-200 shadow-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-slate-900 mb-3">Key Features:</h4>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {project.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center gap-2 text-slate-700 bg-white p-3 rounded-lg border border-slate-200"
                                            >
                                                <div className="text-blue-500">{feature.icon}</div>
                                                <span>{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <h4 className="text-slate-900 mb-3">Highlights:</h4>
                                    <ul className="space-y-2">
                                        {project.highlights.map((highlight, highlightIndex) => (
                                            <li
                                                key={highlightIndex}
                                                className="flex items-start gap-2 text-slate-700"
                                            >
                                                <span className="text-green-500 mt-1">✓</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                {/* <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200">
                                    <a
                                        href={project.liveDemo}
                                        className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>

                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects