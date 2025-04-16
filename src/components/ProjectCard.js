const ProjectCard = ({ title, description, imgSrc, link, reverse }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="p-4 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <button
  onClick={handleClick}
  className="mt-3 px-4 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-primary/80 transition"
>
  View Project →
</button>
      </div>

      {/* Image */}
      <img
        src={imgSrc}
        alt={title}
        className="w-full md:w-1/2 h-48 md:h-auto object-cover"
      />
    </div>
  );
};

export default ProjectCard;
