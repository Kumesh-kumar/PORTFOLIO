"use client";

const skills = {
    Frontend: ["React.js", "Redux Toolkit", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "REST API", "JWT"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["GitHub", "Postman", "Vercel", "Vite"],
};

const Skills = () => {
    return (
        <section className="py-20 bg-[#020617] text-white px-6 md:px-16" id="skill">
            <h2 className="text-3xl font-bold text-center mb-10"> Skills</h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {Object.entries(skills).map(([category, items], i) => (
                    <div key={i} className="bg-[#1e293b] p-6 rounded-xl">
                        <h3 className="text-sky-400 font-semibold mb-3">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill, idx) => (
                                <span key={idx} className="bg-sky-400/10 text-sky-400 px-3 py-1 text-sm rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;