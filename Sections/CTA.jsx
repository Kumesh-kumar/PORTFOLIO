"use client";
import { motion } from "framer-motion";

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-sky-500/10 to-blue-500/10 text-white px-6 md:px-16">
            <div className="max-w-4xl mx-auto text-center">

                {/* HEADING */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold"
                >
                    Available for Immediate Joining | React Developer
                </motion.h2>

                {/* SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 mt-4 text-lg"
                >
                    I build fast, scalable, and user-friendly web applications using React and the MERN stack.
                    Currently looking for opportunities where I can deliver real impact and grow as a developer.
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row justify-center gap-4 mt-8"
                >
                    {/* EMAIL BUTTON */}
                    <a
                        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                        className="bg-sky-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                        📧 Hire Me
                    </a>

                    {/* CALL BUTTON */}
                    <a
                        href={`tel:${process.env.NEXT_PUBLIC_MOBILE_URL}`}
                        className="border border-sky-400 px-6 py-3 rounded-xl hover:bg-sky-400 hover:text-black transition"
                    >
                        📱 Call Me
                    </a>

                    {/* LINKEDIN BUTTON */}
                    <a
                        href={`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`}
                        target="_blank"
                        className="border border-sky-400 px-6 py-3 rounded-xl hover:bg-sky-400 hover:text-black transition"
                    >
                        💼 LinkedIn
                    </a>
                </motion.div>

            </div>
        </section >
    );
};

export default CTA;