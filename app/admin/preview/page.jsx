"use client";
import { useState, useRef } from "react";
import { RefreshCw, ExternalLink, Monitor, Smartphone, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function LivePreview() {
    const [view, setView] = useState("desktop");
    const [key, setKey] = useState(0);
    const iframeRef = useRef(null);

    const refresh = () => setKey(prev => prev + 1);

    return (
        <div className="space-y-6 h-[calc(100vh-160px)] flex flex-col">
            <header className="flex flex-wrap justify-between items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Live Preview</h1>
                    <p className="text-gray-400 text-sm">Real-time view of your portfolio.</p>
                </div>

                <div className="flex items-center gap-3 bg-[#1e293b] p-1.5 rounded-2xl border border-white/5">
                    <button 
                        onClick={() => setView("desktop")}
                        className={`p-2 rounded-xl transition-all ${view === "desktop" ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20" : "text-gray-400 hover:text-white"}`}
                        title="Desktop View"
                    >
                        <Monitor className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => setView("mobile")}
                        className={`p-2 rounded-xl transition-all ${view === "mobile" ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20" : "text-gray-400 hover:text-white"}`}
                        title="Mobile View"
                    >
                        <Smartphone className="w-5 h-5" />
                    </button>
                    <div className="w-px h-6 bg-white/10 mx-1" />
                    <button 
                        onClick={refresh}
                        className="p-2 text-gray-400 hover:text-white transition-all hover:rotate-180 duration-500"
                        title="Refresh Preview"
                    >
                        <RefreshCw className="w-5 h-5" />
                    </button>
                    <a 
                        href="/" 
                        target="_blank" 
                        className="p-2 text-gray-400 hover:text-sky-400 transition-all"
                        title="Open in new tab"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </header>

            <div className="flex-1 bg-black/20 rounded-3xl border border-white/5 overflow-hidden flex justify-center items-start pt-8 pb-4 relative group">
                {/* Device Frame */}
                <motion.div 
                    animate={{ width: view === "desktop" ? "100%" : "375px" }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className={`h-full bg-white rounded-t-2xl shadow-2xl relative overflow-hidden ${view === "mobile" ? "border-[8px] border-[#1e293b]" : ""}`}
                >
                    <iframe 
                        key={key}
                        ref={iframeRef}
                        src="/" 
                        className="w-full h-full border-none"
                    />
                </motion.div>

                {/* Status Indicator */}
                <div className="absolute bottom-8 right-8 flex items-center gap-2 bg-[#0b0f1a]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-gray-300">Live Sync Active</span>
                </div>
            </div>
        </div>
    );
}
