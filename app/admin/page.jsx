"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
    Users, 
    Briefcase, 
    MessageSquare, 
    Eye,
    ArrowUpRight,
    Loader2
} from "lucide-react";

const StatCard = ({ title, value, icon: Icon, color }) => (
    <motion.div 
        whileHover={{ y: -5 }}
        className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6"
    >
        <div className="flex items-start justify-between">
            <div>
                <p className="text-gray-400 text-sm font-medium">{title}</p>
                <h3 className="text-3xl font-bold mt-2 text-white">{value}</h3>
            </div>
            <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400`}>
                <Icon className="w-6 h-6" />
            </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-green-400">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>Updated live</span>
        </div>
    </motion.div>
);

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        projects: 0,
        messages: 0,
        skills: 0,
        experience: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [projRes, msgRes, skillRes, expRes] = await Promise.all([
                    fetch("/api/projects"),
                    fetch("/api/messages", { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }),
                    fetch("/api/skills"),
                    fetch("/api/experience")
                ]);

                const [proj, msg, skill, exp] = await Promise.all([
                    projRes.json(),
                    msgRes.json(),
                    skillRes.json(),
                    expRes.json()
                ]);

                setStats({
                    projects: proj.length || 0,
                    messages: msg.length || 0,
                    skills: skill.length || 0,
                    experience: exp.length || 0
                });
            } catch (err) {
                console.error("Error fetching stats:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-sky-400" />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-gray-400 mt-2">Welcome to your portfolio management overview.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Projects" value={stats.projects} icon={Briefcase} color="sky" />
                <StatCard title="Messages" value={stats.messages} icon={MessageSquare} color="purple" />
                <StatCard title="Total Skills" value={stats.skills} icon={Eye} color="green" />
                <StatCard title="Experience" value={stats.experience} icon={Users} color="orange" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8">
                    <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-sky-500/10 border border-sky-500/20 rounded-2xl text-sky-400 font-medium hover:bg-sky-500/20 transition-all text-left">
                            Add New Project
                        </button>
                        <button className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-purple-400 font-medium hover:bg-purple-500/20 transition-all text-left">
                            Update Profile
                        </button>
                        <button className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400 font-medium hover:bg-green-500/20 transition-all text-left">
                            View Messages
                        </button>
                        <button className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-orange-400 font-medium hover:bg-orange-500/20 transition-all text-left">
                            Manage Skills
                        </button>
                    </div>
                </div>

                <div className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8">
                    <h2 className="text-xl font-bold mb-4">Recent Status</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <Eye className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">Frontend Live</p>
                                    <p className="text-xs text-gray-400">Connected to MongoDB Atlas</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">HEALTHY</span>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}
