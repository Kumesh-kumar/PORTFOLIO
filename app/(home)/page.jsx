import Footer from '@/components/Footer'
import About from '@/Sections/About'
import Achievements from '@/Sections/Achievements'
import Contact from '@/Sections/Contact'
import CTA from '@/Sections/CTA'
import Education from '@/Sections/Education'
import Experience from '@/Sections/Experience'
import Header from '@/Sections/Header'
import Projects from '@/Sections/Projects'
import Skills from '@/Sections/Skills'
import { Tilt_Neon } from 'next/font/google'
import React from 'react'



const HomePage = () => {
    return (
        <>
            <main className='mt-14'>
                <Header />
                <About />
                <Education />
                <Skills />
                <Projects />
                <CTA />
                <Experience />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default HomePage