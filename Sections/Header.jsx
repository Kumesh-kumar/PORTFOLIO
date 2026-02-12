"use client"
import React from 'react'
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'

import Image from 'next/image'
const Header = () => {
    return (
        <section id='home' className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/* left side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block mb-4"
                        >
                            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
                                Available for Full-Time Opportunities
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl lg:text-5xl mb-4 text-white"
                        >
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Kumesh Kumar
                            </span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl lg:text-3xl mb-6 text-slate-300"
                        >
                            Full-Stack React Developer
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl text-slate-400 mb-4"
                        >
                            Building scalable, high-performance web applications with React & Node.js.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-slate-400 mb-8"
                        >
                            Based in Mohali, Punjab, India • 1+ year of experience crafting production-level
                            applications with expertise in React, Node.js, MongoDB, and performance-focused
                            development.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors"
                            >
                                View Projects
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-lg transition-colors"
                            >
                                Contact Me
                            </a>
                        </motion.div>



                    </motion.div>


                    {/* right side  */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">

                            <Image
                                src="/coding.jpg"
                                alt="Coding Image"
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                        </div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-10 right-10 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg text-white"
                        >
                            React.js
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute bottom-20 left-10 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg text-white"
                        >
                            Node.js
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity }}
                            className="absolute bottom-40 right-20 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg text-white"
                        >
                            MongoDB
                        </motion.div>


                    </motion.div>
                </div>
            </div>
            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1 h-2 bg-slate-500 rounded-full"></div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Header