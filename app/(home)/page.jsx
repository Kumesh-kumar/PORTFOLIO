import Footer from '@/components/Footer'
import About from '@/Sections/About'
import Contact from '@/Sections/Contact'
import Education from '@/Sections/Education'
import Experience from '@/Sections/Experience'
import Header from '@/Sections/Header'
import Projects from '@/Sections/Projects'
import Skills from '@/Sections/Skills'
import CTA from '@/Sections/CTA'
import connectDB from '@/lib/mongodb'
import { Portfolio } from '@/models/Portfolio'
import { Project } from '@/models/Project'
import { Skill } from '@/models/Skill'
import { Education as EducationModel } from '@/models/Education'
import { Experience as ExperienceModel } from '@/models/Experience'

export const dynamic = "force-dynamic";

const HomePage = async () => {
    await connectDB();

    // Fetch all data in parallel
    const [portfolio, projects, skills, experiences, education] = await Promise.all([
        Portfolio.findOne().lean(),
        Project.find().sort({ order: 1, createdAt: -1 }).lean(),
        Skill.find().sort({ order: 1 }).lean(),
        ExperienceModel.find().sort({ order: 1, createdAt: -1 }).lean(),
        EducationModel.find().sort({ order: 1 }).lean()
    ]);

    // Format data for sections
    const formattedPortfolio = JSON.parse(JSON.stringify(portfolio || {}));
    const formattedProjects = JSON.parse(JSON.stringify(projects));
    const formattedSkills = JSON.parse(JSON.stringify(skills));
    const formattedExperiences = JSON.parse(JSON.stringify(experiences));
    const formattedEducation = JSON.parse(JSON.stringify(education));

    return (
        <>
            <main className='mt-14'>
                <Header profile={formattedPortfolio} />
                <About profile={formattedPortfolio} />
                <Education education={formattedEducation} />
                <Skills skills={formattedSkills} />
                <Projects projects={formattedProjects} />
                <CTA profile={formattedPortfolio} />
                <Experience experiences={formattedExperiences} />
                <Contact socialLinks={formattedPortfolio.socialLinks} />
            </main>
            <Footer profile={formattedPortfolio} />
        </>
    )
}

export default HomePage