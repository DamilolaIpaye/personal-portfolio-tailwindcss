import React from 'react';

const Navbar = () => {
    return (
        <nav  className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6">
            <h3 c>Rodiyah</h3>
            <h3 className='name-md'>Rodiyah Ipaye</h3>
            <ul className="hidden md:flex space-x-6">
            <li>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition duration-300">
              Contact
            </a>
          </li>
            </ul>
        </nav>
    );
};

export default Navbar;
