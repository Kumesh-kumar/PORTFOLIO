"use client"
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const list = [
        "Home",
        "About",
        "Experience",
        "Skill",
        "Projects",
        "Education",
        "Contact",
    ];

    return (
        <nav className="bg-gray-900 text-white w-full fixed top-0 z-50 shadow-md">
            <div className="flex justify-between items-center h-14 px-6 max-w-7xl mx-auto">

                {/* Logo */}
                <div className="text-xl font-semibold tracking-wide">
                    Kumesh
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-medium">
                    {list.map((value) => (
                        <Link
                            key={value}
                            href={`#${value.toLocaleLowerCase()}`}
                            className="cursor-pointer hover:text-amber-400 transition duration-300"
                        >
                            {value}
                        </Link>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-4" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col items-center gap-6">
                    {list.map((value) => (
                        <Link
                            key={value}
                            onClick={() => setIsOpen(false)}
                            href={`#${value.toLocaleLowerCase()}`}
                            className="cursor-pointer hover:text-amber-400 transition duration-300"
                        >
                            {value}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
