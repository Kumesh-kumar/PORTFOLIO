"use client";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="py-10 bg-[#020617] text-white px-6 md:px-10" id="about">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE (TEXT) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        👨‍💻 About Me
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-4">
                        I am a passionate React JS developer focused on building real-world,
                        scalable web applications. I enjoy transforming ideas into
                        functional and user-friendly interfaces.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-4">
                        I have developed a complete web platform <span className="text-sky-400 font-semibold">Shikharpe</span>,
                        which includes Admin and Seller dashboards, authentication system,
                        and API integration.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        I am continuously learning and improving my skills to build modern,
                        high-performance applications and contribute effectively to a team.
                    </p>

                    {/* BUTTON */}
                    <div className="mt-6">
                        <a
                            href="/resume.pdf"
                            download={true}
                            className="inline-block bg-sky-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                        >
                            📄 Download Resume
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT SIDE (CARDS) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 gap-4"
                >
                    <div className="bg-[#1e293b] p-5 rounded-xl">
                        <h3 className="text-sky-400 text-xl font-bold">4+</h3>
                        <p className="text-gray-400 text-sm mt-2">Projects Built</p>
                    </div>

                    <div className="bg-[#1e293b] p-5 rounded-xl">
                        <h3 className="text-sky-400 text-xl font-bold">React</h3>
                        <p className="text-gray-400 text-sm mt-2">Core Technology</p>
                    </div>

                    <div className="bg-[#1e293b] p-5 rounded-xl">
                        <h3 className="text-sky-400 text-xl font-bold">API</h3>
                        <p className="text-gray-400 text-sm mt-2">Integration Skills</p>
                    </div>

                    <div className="bg-[#1e293b] p-5 rounded-xl">
                        <h3 className="text-sky-400 text-xl font-bold">UI</h3>
                        <p className="text-gray-400 text-sm mt-2">Modern Design</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;