import React from 'react';
import ProjectCard from './ProjectCard';
import Step from '../assets/step.png';
import Bank from "../assets/bank.png";
import WorldWise from "../assets/worldwise.png"
import Advice from "../assets/advice.png";
import ClassyWeather from "../assets/classy-weather.png"
import UsePopcorn from "../assets/usePopcorn.png"
import TipCalculator from "../assets/tip-calculator.png"
import Quiz from "../assets/quiz.png"
import Atomicblog from "../assets/atomic-blog.png"
import Workout from "../assets/workout.png"
import Pizza from "../assets/fast-react-pizza.png"


const projects = [
    {
        title: "Step navigation app",
        description: "Step navigation typically refers to the user interface (UI) design pattern that guides users through a multi-step process.",
        imgSrc: Step,
        url: 'https://step-sand.vercel.app/'
    },
    {
        title: "Bank app",
        description: "Web-based banking application designed to provide users with a seamless and efficient banking experience.",
        imgSrc: Bank,
        url: 'https://bank-xi-mauve.vercel.app/'
    },
    {
        title: "Atomic-blog app",
        description: "Atomic-blog app lets you read and write insightful articles on a range of topics.",
        imgSrc: Atomicblog,
        url: 'https://atomic-blog-ashy.vercel.app/'
    },
    {
        title: "Worldwise app",
        description: "WorldWise helps you explore countries and current events through a variety of features tailored to your learning style.",
        imgSrc: WorldWise,
        url: 'https://worldwise-beryl-pi.vercel.app/'
    },
    {
        title: "Get advice app",
        description: "GetAdvice offers a platform where you can receive advice from knowledgeable peers.",
        imgSrc: Advice,
        url: 'https://get-advice-psi.vercel.app/'
    },
    {
        title: "Classy Weather app",
        description: "Classy Weather offers detailed forecasts, customizable notifications, and unique visualizations, all wrapped in a sleek, modern design.",
        imgSrc: ClassyWeather,
        url: 'https://classy-weather-3pq8.vercel.app/'
    },
    {
        title: "usePopcorn app",
        description: "usePopcorn app allows you to search for recommendations, track your watchlist, and dive deep into film details.",
        imgSrc: UsePopcorn,
        url: 'https://popcorn1-rosy.vercel.app/'
    },
    {
        title: "Tip Calculator app",
        description: "The Tip Calculator app is a simple yet efficient tool designed to help users calculate tips quickly and accurately.",
        imgSrc: TipCalculator,
        url: 'https://tip-calculator-gray-tau.vercel.app/'
    },
    {
        title: "React-quiz app",
        description: "React quiz app involves building a dynamic, interactive user interface that can present questions, record user responses, and provide feedback or scores.",
        imgSrc: Quiz,
        url: 'https://react-quiz-phi-eight.vercel.app/'
    },
    {
        title: "Workout-timer app",
        description: "Elevate your fitness routine with Workout-Timer, the ultimate workout timer app designed to help you maximize your training sessions.",
        imgSrc: Workout,
        url: 'https://vercel.com/ipaye-damilolas-projects/workout-timer'
    },
    {
        title: "Fast-react-pizza app",
        description: "The Fast React Pizza App is a project idea for practicing React concepts while building a simple, interactive web application for a fictional pizza restaurant.",
        imgSrc: Pizza,
        url: 'https://fast-react-pizza-six-pi.vercel.app/'
    }
];

const Projects = () => {
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
        </div>
    );
};

export default Projects;
