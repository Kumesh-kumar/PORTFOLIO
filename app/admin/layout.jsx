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
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token && pathname !== "/admin/login") {
            router.push("/admin/login");
        } else {
            setIsLoaded(true);
        }
    }, [pathname, router]);

    // Close mobile menu when path changes
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/admin/login");
    };

    if (pathname === "/admin/login") return <>{children}</>;
    if (!isLoaded) return <div className="min-h-screen bg-[#020617]" />;

    return (
        <div className="flex min-h-screen bg-[#020617] text-white">
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-[#0b0f1a] border-b border-white/5 flex items-center justify-between px-6">
                <h1 className="font-bold text-lg bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                    Admin Panel
                </h1>
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileOpen(false)}
                        className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside
                className={`fixed lg:sticky top-0 left-0 z-50 h-screen transition-all duration-300 border-r border-white/5 bg-[#0b0f1a] 
                    ${sidebarOpen ? "w-64" : "w-20"} 
                    ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                <div className="flex flex-col h-full">
                    {/* Header (Desktop only toggle part) */}
                    <div className="p-6 flex items-center justify-between">
                        <AnimatePresence mode="wait">
                            {sidebarOpen && (
                                <motion.h1
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="font-bold text-xl bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent truncate"
                                >
                                    Admin Panel
                                </motion.h1>
                            )}
                        </AnimatePresence>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="hidden lg:block p-2 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            {sidebarOpen ? <Menu className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        </button>
                        
                        {/* Mobile Close Button (Inside sidebar for convenience) */}
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
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
                                    <Icon className={`w-5 h-5 flex-shrink-0 ${active ? "text-sky-400" : "group-hover:text-white"}`} />
                                    {(sidebarOpen || mobileOpen) && (
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="font-medium truncate"
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                    {active && (sidebarOpen || mobileOpen) && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="ml-auto w-1 h-5 bg-sky-400 rounded-full flex-shrink-0"
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
                            <LogOut className="w-5 h-5 flex-shrink-0" />
                            {(sidebarOpen || mobileOpen) && <span className="font-medium">Logout</span>}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 pt-16 lg:pt-0">
                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}