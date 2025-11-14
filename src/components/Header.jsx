import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">My CV</h1>
        <nav className="space-x-4">
          <a href="#home" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#profile" className="text-gray-700 hover:text-blue-500">
            Profile
          </a>
          <a href="#experience" className="text-gray-700 hover:text-blue-500">
            Experience
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
