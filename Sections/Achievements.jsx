"use client";

const Achievements = () => {
    return (
        <section className="py-20 bg-[#020617] text-white px-6 md:px-16">
            <h2 className="text-3xl font-bold text-center mb-12">
                🏆 Achievements
            </h2>

            <div className="max-w-3xl mx-auto gap-6">

                {/* 🥇 AWARD CARD */}
                <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border border-yellow-400 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-yellow-400">
                        🥇 Ownership Hero Award
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                        AIinfox | October 2025
                    </p>

                    <p className="text-gray-400 mt-3 text-sm">
                        Awarded for successfully delivering the Shikharpe project on time by
                        taking full ownership, solving complex challenges, and consistently
                        putting in dedicated effort to complete all critical tasks.
                    </p>
                </div>

                {/* OTHER ACHIEVEMENTS */}
                {/* <div className="bg-[#1e293b] p-6 rounded-xl space-y-3 text-gray-400 text-sm">
                    <p>✔ Built applications serving 1000+ users</p>
                    <p>✔ Improved performance by 20%</p>
                    <p>✔ Reduced response time by 35%</p>
                    <p>✔ Developed 40+ reusable React components</p>
                    <p>✔ Delivered 15+ features without critical bugs</p>
                </div> */}

            </div>
        </section>
    );
};

export default Achievements;