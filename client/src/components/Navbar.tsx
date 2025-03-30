import { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/30 shadow-md px-6 md:px-16 lg:px-24 py-6 flex justify-between items-center font-mono fixed top-0 z-50 left-0 right-0  backdrop-blur backdrop-opacity-100 rounded-lg mx-4 my-4">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold">👽</span>
        <span className="font-semibold text-lg">TK-KOSI</span>
      </div>

      {/* Middle: Navigation Links */}
      <div className="hidden md:flex space-x-6 text-black font-medium">
        <a href="#about" className="hover:text-gray-500">About Me</a>
        <a href="#skills" className="hover:text-gray-500">Skills</a>
        <a href="#projects" className="hover:text-gray-500">Projects</a>
        <a href="#Contact" className="hover:text-gray-500">Contact Me</a>
      </div>

      {/* Right: Resume Button */}
      <a
        href="/resume.pdf"
        download
        className="hidden md:flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md font-medium transition duration-300 hover:bg-gray-500 hover:text-black border-2 border-black hover:border-black"
        onClick={() => setIsOpen(false)}
      >
        <span>Resume</span> <FaDownload />
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6">
          <a href="#about" className="text-gray-700 font-medium">About Me</a>
          <a href="#skills" className="text-gray-700 font-medium">Skills</a>
          <a href="#projects" className="text-gray-700 font-medium">Projects</a>
          <a href="#contact" className="text-gray-700 font-medium">Contact Me</a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md font-medium"
          >
            <span>Resume</span> <FaDownload />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

