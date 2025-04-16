import React from "react";
import ProfileImg from "../assets/me.png";
import YellowBg from "../assets/yellow-bg.png";

const About = () => {
  const handleProjectButtonClick = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-48 h-48 md:w-60 md:h-60">
           
            <img
              src={ProfileImg}
              alt="Rodiyah Ipaye"
              className="relative z-10 w-full rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-1/2">
         
        <h2 >Hello, my name is Rodiyah Ipaye</h2>
            <p className="text-gray-600 mt-4 leading-relaxed"> 
            a passionate front-end developer specializing in building beautiful and 
            functional web applications using <span className="text-blue-500 font-medium">React</span> 
            and <span className="text-green-500 font-medium">Tailwind CSS</span>. 
            I love transforming ideas into reality and crafting seamless user experiences.
          </p>
          <p className="text-gray-600 mt-4">
            When I'm not coding, you can find me exploring new technologies, 
            reading, or working on exciting side projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 hover:from-white-500 hover:to-yellow-500 hover:text-white hover:shadow-lg"
              onClick={handleProjectButtonClick}
            >
              Projects
            </button>
            <a
              href="https://www.linkedin.com/in/damilola-ipaye-8413b1243/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-yellow-500 text-black-500 font-semibold px-6 py-2 rounded-lg transition duration-300 hover:bg-yellow-500 hover:text-white hover:shadow-md"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
