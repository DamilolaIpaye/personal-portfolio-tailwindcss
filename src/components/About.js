import React from 'react';
import ProfileImg from "../assets/me.png"
// import YellowBg from "../assets/yellow-bg.png"

const About = () => {
  // const handleLinkedInClick = () => {
  //   window.open('https://www.linkedin.com/in/damilola-ipaye-8413b1243/', '_blank');
  // };

  const handleProjectButtonClick = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <h1 className="profile-greeting">
          Hello, my name
          <br className="sm-hidden" /> is Rodiyah Ipaye.
        </h1>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
      
          <img src={ProfileImg } alt="Rodiyah Ipaye" />
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg">
          {/* <img
            // src="Rodiyah" // Change to your profile image
            alt="Rodiyah"
            className="w-full h-full object-cover"
          /> */}
        </div>


<div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Hi, I'm <span className="font-semibold text-gray-800">Rodiyah Ipaye</span>, 
            a passionate front-end developer specializing in building beautiful and 
            functional web applications using <span className="text-blue-500 font-medium">React</span> 
             and <span className="text-green-500 font-medium">Tailwind CSS</span>. 
            I love transforming ideas into reality and crafting seamless user experiences.
          </p>
          <p className="text-gray-600 mt-4">
            When I'm not coding, you can find me exploring new technologies, 
            reading, or working on exciting side projects.
          </p>

    
          <button 
  className="bg-gradient-to-r from-yellow-500 to-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 hover:from-white-500 hover:to-yellow-500  hover:text-white hover:shadow-lg" 
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

      {/* <div
        style={{
          backgroundImage:
            `url(${YellowBg})`,
        }}
        className="profile-image"
      >
        <img src={ProfileImg} className="topRightImage" alt="Damilola" />
      </div> */}
      </div>
    </section >
  );
};

export default About;
