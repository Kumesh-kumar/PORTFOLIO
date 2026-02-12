"use client"
import { useInView, motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, PhoneCall } from 'lucide-react';
import React, { useRef } from 'react'

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
            href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
            color: "blue"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            value: process.env.NEXT_PUBLIC_LINKEDIN_URL?.replace("https://", ""),
            href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
            color: "indigo"
        },
        {
            icon: <PhoneCall className="w-6 h-6" />,
            label: "Mobile",
            value: process.env.NEXT_PUBLIC_MOBILE_URL,
            href: process.env.NEXT_PUBLIC_GITHUB_URL,
            color: "slate"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "Mohali, Punjab, India",
            href: null,
            color: "green"
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl lg:text-5xl mb-4">Let's Build Something Amazing Together</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        I'm currently open to full-time opportunities and freelance projects. Whether you're
                        looking to build a new product or scale an existing one, I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {method.href ? (
                                    <a
                                        href={method.href}
                                        target={method.href.startsWith("http") ? "_blank" : undefined}
                                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-700/50 hover:border-blue-500 transition-all group"
                                    >
                                        <div className="p-3 bg-slate-700 text-white rounded-lg group-hover:bg-blue-500 transition-colors">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <div className="text-slate-400 text-sm mb-1">{method.label}</div>
                                            <div className="text-white">{method.value}</div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl">
                                        <div className="p-3 bg-slate-700 text-white rounded-lg">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <div className="text-slate-400 text-sm mb-1">{method.label}</div>
                                            <div className="text-white">{method.value}</div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center"
                    >
                        <a
                            href="mailto:kumesh@example.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg transition-colors shadow-lg shadow-blue-500/30"
                        >
                            <Mail className="w-5 h-5" />
                            Get in Touch
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-slate-400">
                            Available for full-time roles, contract work, and exciting freelance projects
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact