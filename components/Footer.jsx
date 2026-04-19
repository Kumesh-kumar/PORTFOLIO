import { Github, Linkedin, Mail, Twitter, Instagram, Heart } from "lucide-react";

const Footer = ({ profile }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#020617] text-slate-400 py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left - Name & Role */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-bold mb-1">{profile?.name || "Kumesh Kumar"}</h3>
                        <p className="text-sm text-gray-500">{profile?.title || "Full-Stack Developer"}</p>
                    </div>

                    {/* Center - Social Links */}
                    <div className="flex items-center gap-4">
                        {profile?.socialLinks?.linkedin && (
                            <a href={profile.socialLinks.linkedin} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-sky-500 text-white rounded-xl transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                        {profile?.socialLinks?.github && (
                            <a href={profile.socialLinks.github} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-sky-500 text-white rounded-xl transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {profile?.socialLinks?.email && (
                            <a href={`mailto:${profile.socialLinks.email}`} className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-sky-500 text-white rounded-xl transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        )}
                    </div>

                    {/* Right - Copyright */}
                    <div className="text-center md:text-right">
                        <p className="flex items-center justify-center md:justify-end gap-1 text-sm bg-white/5 px-4 py-1 rounded-full border border-white/5">
                            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by {profile?.name?.split(' ')[0] || "Me"}
                        </p>
                        <p className="mt-2 text-[10px] uppercase tracking-widest text-gray-600">© {currentYear} All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;