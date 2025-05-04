// import { useState } from "react";
// import { FaDownload, FaBars, FaTimes } from "react-icons/fa";


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navlinks = [
//     {
//       label: "About Me",
//       link: "#about",
//     },
//     {
//       label: "Skills",
//       link: "#skills",
//     },
//     {
//       label: "Projects",
//       link: "#projects",
//     },
//     {
//       label: "Contact Me",
//       link: "#contact",
//     },
//     {
//       label: "Resume",
//       link: "/resume.pdf",
//       download: true,
//     }
//   ];

//   return (
//     <nav className="w-full bg-white/30 shadow-md px-6 md:px-16 lg:px-24 py-6 flex justify-between items-center font-mono fixed top-0 z-50 left-0 right-0  backdrop-blur backdrop-opacity-100 rounded-lg mx-4 my-4 md:ba">
//       {/* Left: Logo */}
//       <div className="flex items-center space-x-2">
//         <span className="text-2xl font-bold">👽</span>
//         <span className="font-semibold text-lg">TK-KOSI</span>
//       </div>

//       {/* Middle: Navigation Links */}
//       <div className="hidden md:flex space-x-6 text-black font-medium">
//         <a href="#about" className="hover:text-gray-500">About Me</a>
//         <a href="#skills" className="hover:text-gray-500">Skills</a>
//         <a href="#projects" className="hover:text-gray-500">Projects</a>
//         <a href="#Contact" className="hover:text-gray-500">Contact Me</a>
//       </div>

//       {/* Right: Resume Button */}
//       <a
//         href="/resume.pdf"
//         download
//         className="hidden md:flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md font-medium transition duration-300 hover:bg-gray-500 hover:text-black border-2 border-black hover:border-black"
//         onClick={() => setIsOpen(false)}
//       >
//         <span>Resume</span> <FaDownload />
//       </a>

//       {/* Mobile Menu Button */}
//       <button
//         className="md:hidden text-2xl"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle navigation menu"
//         aria-expanded={isOpen}
//       >
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6">
//           <a href="#about" className="text-gray-700 font-medium">About Me</a>
//           <a href="#skills" className="text-gray-700 font-medium">Skills</a>
//           <a href="#projects" className="text-gray-700 font-medium">Projects</a>
//           <a href="#contact" className="text-gray-700 font-medium">Contact Me</a>
//           <a
//             href="/resume.pdf"
//             download
//             className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md font-medium"
//           >
//             <span>Resume</span> <FaDownload />
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






import { useEffect, useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

type NavLink = {
  label: string;
  link: string;
  download?: boolean;
};

const navlinks: NavLink[] = [
  { label: "About Me", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
  { label: "Contact Me", link: "#contact" },
  { label: "Resume", link: "/resume.pdf", download: true  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      navlinks.forEach(({ link }) => {
        if (!link.startsWith("#")) return;

        const id = link.substring(1);
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (nav: NavLink, isMobile: boolean = false) => (
    <a
      key={nav.label}
      href={nav.link}
      download={nav.download}
      onClick={() => setIsOpen(false)}
      className={`${
        active === nav.link ? "text-black font-bold underline underline-offset-4" : "text-gray-700"
      } ${
        isMobile ? "block px-4 py-2 text-lg" : "hover:text-gray-500"
      } transition duration-300`}
    >
      {nav.label}
    </a>
  );

  return (
    <nav className="w-full bg-white/30 shadow-md px-6 md:px-16 lg:px-24 py-4 flex justify-between items-center font-mono fixed top-0 z-50 left-0 right-0 backdrop-blur rounded-lg mx-4 my-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold">👽</span>
        <span className="font-semibold text-lg">TK-KOSI</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-black font-medium">
        {navlinks
          .filter((nav) => nav.label !== "Resume")
          .map((nav) => renderLink(nav))}
      </div>

      {/* Desktop Resume */}
      <a
        href="/resume.pdf"
        download
        className="hidden md:flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md font-medium transition duration-300 hover:bg-white hover:text-black border-2 border-black"
      >
        <span>Resume</span> <FaDownload />
      </a>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4 z-50">
          {navlinks.map((nav) => renderLink(nav, true))}
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
