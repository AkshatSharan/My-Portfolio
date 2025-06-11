import ProjectCard from "../components/ProjectCard"
import SectionTitle from "../components/SectionTitle"
import ClubConnectDisp from '../assets/ClubConnectDisp.png'
import Coffee from '../assets/Coffee.png'
import TaskMe from '../assets/TaskMe.png'

const sampleProjects = [
    {
        title: "TaskMe",
        description: "A personal portfolio website built with React and Tailwind CSS.",
        imageUrl: TaskMe,
        techStack: ["MongoDb", "Express.js", "React.js", "Node.js", "Axios", "JavaScript", "Tailwind CSS",],
        githubLink: "https://github.com/AkshatSharan/TaskMe",
        liveDemo: "https://task-me-sooty.vercel.app/",
    },
    {
        title: "ClubConnect",
        description: "A personal portfolio website built with React and Tailwind CSS.",
        imageUrl: ClubConnectDisp,
        techStack: ["MongoDb", "Express.js", "React.js", "Node.js", "JavaScript", "Axios", "Firebase", "Tailwind CSS",],
        githubLink: "https://github.com/AkshatSharan/MERN-Club-Management",
    },
    {
        title: "CoffeeHaven",
        description: "Real-time chat application with user authentication and private rooms.",
        imageUrl: Coffee,
        techStack: ["React", "GSAP", "Tailwind CSS"],
        githubLink: "https://github.com/AkshatSharan/coffee-haven",
        liveDemo: "https://coffee-haven-one.vercel.app/",
    },
]

const Projects = () => {
    return (
        <section className="site-section" id="projects">
            <SectionTitle title={"Projects"} />
            <div className="project-cards-container py-8 mt-5 flex flex-col gap-20 items-center">
                {sampleProjects.map((project, id) => {
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
