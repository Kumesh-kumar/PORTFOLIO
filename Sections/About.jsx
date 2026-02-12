"use client"
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { Code2, Database, Layers, Users } from 'lucide-react';
import Image from 'next/image';
const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const highlights = [
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Clean Code",
            description: "Writing maintainable, scalable code following best practices"
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Database Optimization",
            description: "Expert in query optimization and schema design"
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Microservices",
            description: "Building distributed systems with modern architecture"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Agile Development",
            description: "Collaborative team player with Agile/Scrum experience"
        }
    ];


    return (
        <section id='about' className="py-20 bg-slate-50 text-black" ref={ref}>
            <div className="container mx-auto px-6" >
                <motion.div
                    initial={{ opacity: 0, y: 20 }
                    }
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">About Me</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                </motion.div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-slate-200 rounded-2xl transform rotate-2"></div>

                            <Image
                                src={'/reactjs.jpeg'}
                                alt='/react Image'
                                width={900}
                                height={500}
                                className='relative rounded-2xl'
                            />
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-3xl mb-6 text-slate-900">
                            Passionate Full-Stack Developer
                        </h3>
                        <p className="text-slate-700 mb-4 leading-relaxed">
                            I'm a passionate software engineer with experience building production-level web
                            applications that serve thousands of users daily. My journey in software development
                            has equipped me with a deep understanding of both frontend and backend technologies.
                        </p>
                        <p className="text-slate-700 mb-6 leading-relaxed">
                            I specialize in creating robust, scalable applications using the MERN stack (MongoDB,
                            Express, React, Node.js). My expertise extends to REST APIs, microservices
                            architecture, database optimization, and implementing best practices in modern web
                            development. I'm committed to writing clean, maintainable code and delivering
                            exceptional user experiences.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mt-8">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-200"
                                >
                                    <div className="text-blue-500 mt-1">{item.icon}</div>
                                    <div>
                                        <h4 className="text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About