import { useState, useEffect } from "react";
import YellowBg from "../assets/yellow-bg.png"; // Make sure the path to the image is correct

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`relative fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center transition-all duration-300 
            ${scrolling ? "bg-white shadow-md" : "bg-transparent"}`}
        >
            {/* Yellow background in the top right corner */}
            <img
                src={YellowBg}
                alt="Background"
                className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 object-cover opacity-60 z-0"
            />

            <h3 className="text-lg font-bold text-black z-10">Rodiyah Ipaye</h3>

            <ul className="hidden md:flex space-x-6 z-10">
                <li><a href="#about" className="text-black hover:text-gray-900">About</a></li>
                <li><a href="#projects" className="text-black hover:text-gray-900">Projects</a></li>
                <li><a href="#contact" className="text-black hover:text-gray-900">Contact</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;
