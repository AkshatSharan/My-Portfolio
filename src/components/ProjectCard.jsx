const ProjectCard = ({
    title,
    description,
    techStack = [],
    liveDemo,
    githubLink,
    imageUrl,
    dir,
}) => {
    return (
        <div className={`bg-gray-100 sm:w-full sm:px-10 rounded-lg md:flex ${dir ? "md:flex-row-reverse" : ""} items-center overflow-hidden transition-all duration-300 group`}>
            {/* Image */}
            <div className="w-full relative overflow-hidden">
                <img
                    src={imageUrl}
                    alt={`${title} preview`}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div
                className="p-6 max-sm:px-0 h-full md:w-2/3"
                style={{
                    color: "white",
                }}
            >
                <h3 className="text-2xl font-semibold text-site-gold mb-2 font-secondary">
                    {title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{description}</p>

                {/* Tech Stack */}
                {techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {techStack.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-full bg-gray-300 text-gray-500 text-xs font-semibold"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                    {liveDemo && (
                        <a
                            href={liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="site-button text-xs"
                        >
                            Live Demo
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="site-button text-xs"
                        >
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
