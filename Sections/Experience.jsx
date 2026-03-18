"use client";

const Experience = () => {
    return (
        <section className="py-20 bg-[#020617] text-white px-6 md:px-16" id="experience">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-3xl font-bold text-center mb-10">💼 Experience</h2>

                <div className="bg-[#1e293b] p-6 rounded-xl">
                    <h3 className="text-xl text-sky-400 font-semibold">
                        MERN Stack Developer – AIinfox
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                        Jan 2025 – Jan 2026
                    </p>

                    <ul className="mt-4 text-gray-400 space-y-2 text-sm">
                        <li>✔ Built applications serving 1000+ users with 99.9% uptime</li>
                        <li>✔ Developed REST APIs handling Multiple daily requests</li>
                        <li>✔ Improved performance by 20% using React optimization</li>
                        <li>✔ Reduced response time by 35% with DB optimization</li>
                        <li>✔ Built 40+ reusable React components</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Experience;