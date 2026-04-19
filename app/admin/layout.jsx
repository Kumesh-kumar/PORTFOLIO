"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    Briefcase,
    GraduationCap,
    Code2,
    User,
    MessageSquare,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Eye
} from "lucide-react";

const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Skills", href: "/admin/skills", icon: Code2 },
    { name: "Experience", href: "/admin/experience", icon: Briefcase },

    { name: "Profile", href: "/admin/profile", icon: User },
    { name: "Messages", href: "/admin/messages", icon: MessageSquare },
    { name: "Live Preview", href: "/admin/preview", icon: Eye },
];

export default function AdminLayout({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token && pathname !== "/admin/login") {
            router.push("/admin/login");
        } else {
            setIsLoaded(true);
        }
    }, [pathname, router]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/admin/login");
    };

    if (pathname === "/admin/login") return <>{children}</>;
    if (!isLoaded) return <div className="min-h-screen bg-[#020617]" />;

    return (
        <div className="flex min-h-screen bg-[#020617] text-white">
            {/* Sidebar */}
            <aside
                className={`fixed lg:relative z-40 h-screen transition-all duration-300 border-r border-white/5 bg-[#0b0f1a] ${sidebarOpen ? "w-64" : "w-20"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 flex items-center justify-between">
                        <AnimatePresence mode="wait">
                            {sidebarOpen && (
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="font-bold text-xl bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent"
                                >
                                    Admin Panel
                                </motion.h1>
                            )}
                        </AnimatePresence>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            {sidebarOpen ? <Menu className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-3 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${active
                                        ? "bg-sky-500/10 text-sky-400"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                >
                                    <Icon className={`w-5 h-5 ${active ? "text-sky-400" : "group-hover:text-white"}`} />
                                    {sidebarOpen && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="font-medium"
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                    {active && sidebarOpen && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="ml-auto w-1 h-5 bg-sky-400 rounded-full"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-white/5">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-3 py-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors group"
                        >
                            <LogOut className="w-5 h-5" />
                            {sidebarOpen && <span className="font-medium">Logout</span>}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}