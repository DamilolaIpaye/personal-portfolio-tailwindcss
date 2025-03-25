const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
            <h3 className="text-lg font-bold">Rodiyah Ipaye</h3>

            <ul className="hidden md:flex space-x-6">
                <li>
                    <a href="#about" className="text-black hover:text-gray-900 transition duration-300">
                        About
                    </a>
                </li>
                <li>
                    <a href="#projects" className="text-black hover:text-gray-900 transition duration-300">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-black hover:text-gray-900 transition duration-300">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;