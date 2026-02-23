
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Kumesh Kumar - React & MERN Stack Developer",
    description: "Explore Kumesh's portfolio: A Full Stack MERN Developer specializing in React, Node.js, and scalable web apps. View live projects and clean code samples.",
    icons: { icon: '/icon.png' }

};

const HomeLayout = ({ children }) => {

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}

export default HomeLayout