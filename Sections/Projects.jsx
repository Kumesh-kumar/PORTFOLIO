"use client";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Shikharpe",
        desc: "B2B multi-vendor platform with admin & seller dashboards.",
        features: ["JWT Auth", "Admin Panel", "Seller Dashboard", "API Integration"],
        link: "https://www.shikharpe.com",
        highlight: true,
    },
    {
        title: "Video Streaming Platform",
        desc: "Netflix-like app with TMDB API and Redux.",
        features: ["API Integration", "Redux", "Lazy Loading", "Performance Optimization"],
        // link: "#",
    },
    {
        title: "Grocery Store App",
        desc: "E-commerce UI with cart functionality.",
        features: ["Product UI", "Cart System", "Responsive"],
        link: "https://grocery-store-one-topaz.vercel.app/",
    },
    {
        title: "To-Do App",
        desc: "Task management app with React.",
        features: ["Add/Delete Tasks", "State Management"],
        link: "https://todolist-jet-three.vercel.app/",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#020617] text-white px-6 md:px-16">
            <h2 className="text-3xl font-bold text-center mb-10">🚀 Projects</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((p, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.05 }}
                        className={`p-6 rounded-xl ${p.highlight ? "border border-sky-400" : "bg-[#1e293b]"}`}>

                        <h3 className="text-xl font-semibold text-sky-400">{p.title}</h3>
                        <p className="text-gray-400 mt-2">{p.desc}</p>

                        <ul className="text-gray-400 mt-3 text-sm space-y-1">
                            {p.features.map((f, idx) => (
                                <li key={idx}>✔ {f}</li>
                            ))}
                        </ul>

                        {p.link && <a href={p.link} target="_blank" className="text-sky-400 mt-4 inline-block">
                            🔗 Live
                        </a>}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;