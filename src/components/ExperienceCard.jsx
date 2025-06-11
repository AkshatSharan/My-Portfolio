const ExperienceCard = ({ company, role, duration, location, description }) => {
  return (
    <article
      className="experience-card p-5 sm:p-6 rounded-lg border border-site-gold bg-gray-800 shadow-md hover:shadow-site-gold transition-shadow duration-300"
      style={{
        borderColor: "var(--color-site-gold)",
        backgroundColor: "var(--color-gray-200)",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
      }}
      aria-label={`${role} at ${company}`}
    >
      <header className="mb-2">
        <h3 className="text-xl sm:text-2xl font-semibold leading-tight">{role}</h3>
        <h4 className="text-lg font-secondary text-site-gold">{company}</h4>
      </header>

      <p className="text-sm sm:text-base text-gray-400 mb-3">
        <time dateTime={duration.replace(/\s/g, "")}>{duration}</time> &bull; {location}
      </p>

      <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{description}</p>
    </article>
  );
};

export default ExperienceCard;
