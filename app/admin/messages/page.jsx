"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Trash2, Mail, User, Clock, Loader2, Search, X } from "lucide-react";
import { authFetch } from "@/services/adminApi";

export default function MessagesAdmin() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const data = await authFetch("/api/messages");
            setMessages(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Delete this message?")) return;
        try {
            await authFetch(`/api/messages?id=${id}`, { method: "DELETE" });
            fetchMessages();
        } catch (err) {
            alert("Delete failed");
        }
    };

    const filteredMessages = messages.filter(m => 
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.subject?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-sky-400 w-10 h-10" /></div>;

    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold font-heading">Messages</h1>
                    <p className="text-gray-400">Read and manage inquiries from your portfolio.</p>
                </div>
                <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input 
                        type="text"
                        placeholder="Search messages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#1e293b]/50 border border-white/5 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                    />
                </div>
            </header>

            <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                    {filteredMessages.length > 0 ? filteredMessages.map((msg) => (
                        <motion.div 
                            key={msg._id}
                            layout
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 group hover:border-sky-500/30 transition-all"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                                        <span className="flex items-center gap-1 bg-sky-500/10 text-sky-400 px-2 py-1 rounded-lg">
                                            <User className="w-3 h-3" /> {msg.name}
                                        </span>
                                        <span className="flex items-center gap-1 bg-purple-500/10 text-purple-400 px-2 py-1 rounded-lg">
                                            <Mail className="w-3 h-3" /> {msg.email}
                                        </span>
                                        <span className="flex items-center gap-1 font-medium italic">
                                            <Clock className="w-3 h-3" /> {new Date(msg.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2">{msg.subject || "No Subject"}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed bg-black/20 p-4 rounded-xl border border-white/5 italic">
                                            "{msg.message}"
                                        </p>
                                    </div>
                                </div>
                                <div className="flex md:flex-col justify-end gap-2">
                                    <button 
                                        onClick={() => handleDelete(msg._id)}
                                        className="p-3 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                                        title="Delete message"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )) : (
                        <div className="text-center py-20 bg-[#1e293b]/20 rounded-3xl border border-dashed border-white/5">
                            <MessageSquare className="w-10 h-10 text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-500">No messages found</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
