import ExperienceCard from "../components/ExperienceCard";
import SectionTitle from "../components/SectionTitle";

const sampleExperiences = [
    {
        company: "Design Esthetics",
        role: "Full Stack Web Developer Intern",
        duration: "03 June, 2024 - 27 June, 2024",
        location: "Bangalore, Karnataka",
        description:
            "Worked on optimizing search algorithms to improve query response time by 15%. Collaborated with a cross-functional team on new features.",
    },
    {
        company: "MarkeTopper Securities Pvt Ltd",
        role: "Frontend Developer Intern",
        duration: "16 May, 2025 -  16 June, 2025",
        location: "Remote",
        description:
            "Developed responsive UI components for Office 365 web apps using React and TypeScript. Improved page load speed and accessibility.",
    },
    {
        company: "Intercorp Biotech Limited",
        role: "WordPress Developer",
        duration: "01 June, 2025 -  30 June, 2025",
        location: "Gurgaon, Haryana",
        description:
            "Built and maintained features on a SaaS platform using MERN stack. Led the integration of payment gateway and improved user onboarding flow.",
    },
];

const Experience = () => {
    return (
        <section className="site-section bg-gray-200" id="experience">
            <SectionTitle title="Experience" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-7 mt-2">
                <div className="flex flex-col space-y-6 md:space-y-8">
                    {sampleExperiences.map((exp, id) => (
                        <ExperienceCard key={id} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
