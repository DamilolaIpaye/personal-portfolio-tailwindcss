import { useState, useEffect } from "react";

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
        <nav className={`fixed top-0 left-0 w-full py-4 px-6 flex justify-between items-center transition-all duration-300 
            ${scrolling ? "bg-white shadow-md" : "bg-transparent"}`}>
            <h3 className="text-lg font-bold text-black">Rodiyah Ipaye</h3>

            <ul className="hidden md:flex space-x-6">
                <li><a href="#about" className="text-black hover:text-gray-900">About</a></li>
                <li><a href="#projects" className="text-black hover:text-gray-900">Projects</a></li>
                <li><a href="#contact" className="text-black hover:text-gray-900">Contact</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;
