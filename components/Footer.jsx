import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left - Name & Role */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white mb-1">Kumesh Kumar</h3>
                        <p className="text-sm">Full-Stack React Developer</p>
                    </div>

                    {/* Center - Social Links */}
                    <div className="flex items-center gap-4">

                        <a
                            href="https://linkedin.com/in/kumeshkumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:kumeshk720@gmail.com"
                            className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Right - Copyright */}
                    {/* <div className="text-center md:text-right text-sm">
                            <p className="flex items-center justify-center md:justify-end gap-1">
                                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Kumesh Kumar
                            </p>
                            <p className="mt-1">© {currentYear} All rights reserved.</p>
                        </div> */}
                </div>
            </div>
        </footer>
    );
}
export default Footer