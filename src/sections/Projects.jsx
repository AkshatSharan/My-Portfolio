import ProjectCard from "../components/ProjectCard"
import SectionTitle from "../components/SectionTitle"
import ClubConnectDisp from '../assets/ClubConnectDisp.png'
import Coffee from '../assets/Coffee.png'
import TaskMe from '../assets/TaskMe.png'

const projects = [
    {
        title: "TaskMe",
        description:
            "A MERN stack task management platform with team collaboration features. Includes group-based membership with private join codes, task assignment with priority settings, and real-time status updates. Integrated Axios for efficient server communication.",
        imageUrl: TaskMe,
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Axios", "JavaScript", "Tailwind CSS"],
        githubLink: "https://github.com/AkshatSharan/TaskMe",
        liveDemo: "https://task-me-sooty.vercel.app/",
    },
    {
        title: "ClubConnect",
        description:
            "A full-stack event and recruitment management system for college clubs. Features secure login, real-time event notifications, optimized API and database performance, and Firebase for file storage. Designed with MERN and Redux for state management.",
        imageUrl: ClubConnectDisp,
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "Axios", "Firebase", "Tailwind CSS"],
        githubLink: "https://github.com/AkshatSharan/MERN-Club-Management",
    },
    {
        title: "CoffeeHaven",
        description:
            "A mobile-first, animated landing page themed around coffee. Created with React.js and GSAP for dynamic animations and interactions. Fully optimized for fast loading and mobile responsiveness.",
        imageUrl: Coffee,
        techStack: ["React.js", "GSAP", "Tailwind CSS"],
        githubLink: "https://github.com/AkshatSharan/coffee-haven",
        liveDemo: "https://coffee-haven-one.vercel.app/",
    }
];

const Projects = () => {
    return (
        <section className="site-section" id="projects">
            <SectionTitle title={"Projects"} />
            <div className="project-cards-container py-8 mt-5 flex flex-col md:gap-20 gap-14 items-center">
                {projects.map((project, id) => {
                    const dir = id % 2;
                    return (
                        <ProjectCard
                            key={id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            techStack={project.techStack}
                            githubLink={project.githubLink}
                            liveDemo={project.liveDemo}
                            dir={dir}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Projects
