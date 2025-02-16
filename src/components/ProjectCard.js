const ProjectCard = ({ title, description, imgSrc, link }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src={ imgSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          <a
            href={link}
            className="inline-block mt-3 text-primary font-semibold hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  