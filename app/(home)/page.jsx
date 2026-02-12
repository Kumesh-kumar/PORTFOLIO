import Footer from '@/components/Footer'
import About from '@/Sections/About'
import Contact from '@/Sections/Contact'
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
                <Experience />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default HomePage