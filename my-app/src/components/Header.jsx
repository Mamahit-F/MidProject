import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        <nav className="flex gap-8 text-lg">
          <a href="#about" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#skills" className="hover:text-gray-300 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-300 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
