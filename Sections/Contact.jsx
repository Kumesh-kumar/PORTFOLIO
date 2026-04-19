"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

const Contact = ({ socialLinks }) => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#020617] text-white px-6">
            <div className="max-w-6xl mx-auto space-y-16">
                <header className="text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Let's <span className="text-[#38bdf8]">Connect</span>
                    </motion.h2>
                    <div className="w-16 h-1 bg-[#0ea5e9] mx-auto rounded-full" />
                </header>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8 bg-[#1e293b]/20 p-10 rounded-3xl border border-white/5"
                    >
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9] border border-[#0ea5e9]/20 group-hover:bg-[#0ea5e9] group-hover:text-white transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Address</p>
                                    <a href={`mailto:${socialLinks?.email}`} className="text-lg font-medium hover:text-[#38bdf8] transition-colors">{socialLinks?.email || "kumeshk720@gmail.com"}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#6366f1]/10 flex items-center justify-center text-[#6366f1] border border-[#6366f1]/20 group-hover:bg-[#6366f1] group-hover:text-white transition-all">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Phone Number</p>
                                    <p className="text-lg font-medium">+91 81980 27188</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Working Location</p>
                                    <p className="text-lg font-medium">Mohali, Punjab, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5 space-y-4">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Social Presence</p>
                            <div className="flex gap-4">
                                <a href={socialLinks?.linkedin} target="_blank" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0ea5e9] transition-all text-slate-400 hover:text-white border border-white/5"><Linkedin className="w-5 h-5" /></a>
                                <a href={socialLinks?.github} target="_blank" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0ea5e9] transition-all text-slate-400 hover:text-white border border-white/5"><Github className="w-5 h-5" /></a>
                                <a href={socialLinks?.twitter} target="_blank" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0ea5e9] transition-all text-slate-400 hover:text-white border border-white/5"><Twitter className="w-5 h-5" /></a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        onSubmit={handleSubmit}
                        className="bg-[#1e293b]/30 p-10 rounded-3xl border border-white/5 space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <input 
                                required value={form.name} onChange={e=>setForm({...form, name: e.target.value})}
                                placeholder="FullName"
                                className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                            />
                            <input 
                                type="email" required value={form.email} onChange={e=>setForm({...form, email: e.target.value})}
                                placeholder="Email"
                                className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                            />
                        </div>
                        <input 
                            required value={form.subject} onChange={e=>setForm({...form, subject: e.target.value})}
                            placeholder="Subject"
                            className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#0ea5e9] transition-all"
                        />
                        <textarea 
                            required rows="5" value={form.message} onChange={e=>setForm({...form, message: e.target.value})}
                            placeholder="Message"
                            className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#0ea5e9] transition-all resize-none"
                        />

                        <button 
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-5 bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold rounded-2xl transition-all shadow-lg shadow-[#0ea5e9]/20 flex items-center justify-center gap-3 disabled:opacity-50"
                        >
                            {status === "loading" ? <Loader2 className="w-6 h-6 animate-spin" /> : 
                             status === "success" ? "Message Sent Successfully ✨" : 
                             <>Send Message <Send className="w-4 h-4" /></>}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;