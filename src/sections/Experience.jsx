import ExperienceCard from "../components/ExperienceCard";
import SectionTitle from "../components/SectionTitle";

const experiences = [
    {
        company: "Design Esthetics",
        role: "Full Stack Web Developer Intern",
        duration: "03 June, 2024 - 27 June, 2024",
        location: "Bangalore, Karnataka",
        description:
            "Developed a full-stack MERN application to manage college club events and recruitments. Implemented secure authentication, real-time notifications, and optimized API/database performance, reducing response times by 25%. Delivered a responsive landing page with React.js, improving load times by 40%. Technologies used: React.js, Redux, Node.js, Express.js, MongoDB, Firebase.",
    },
    {
        company: "MarkeTopper Securities Pvt Ltd",
        role: "Frontend Web Developer Intern",
        duration: "16 May, 2025 - 30 June, 2025",
        location: "Remote",
        description:
            "Built a stock comparison web application using React.js and Recharts to visualize Excel-based financial data. Developed synchronized multi-sheet chart views with interactive features like normalization and logarithmic scaling to ensure accurate trend analysis. Enabled side-by-side and combined sheet comparisons to enhance usability and clarity.",
    },
    {
        company: "Intercorp Biotech Limited",
        role: "WordPress Developer",
        duration: "01 June, 2025 -  30 June, 2025",
        location: "Gurgaon, Haryana",
        description:
            "Worked on a WooCommerce-based WordPress site using the Kadence theme. Managed the listing and publishing of new products from staging to production during launch. Led the redesign of the shop page to enhance modern aesthetics and improve user experience.",
    },
];

const Experience = () => {
    return (
        <section className="site-section bg-gray-200" id="experience">
            <SectionTitle title="Experience" />
            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8 py-7 mt-2">
                <div className="flex flex-col space-y-6 md:space-y-8">
                    {experiences.map((exp, id) => (
                        <ExperienceCard key={id} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
