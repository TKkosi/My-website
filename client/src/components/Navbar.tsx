// const Navbar = () => {
//     return (
//         <nav className="flex flex-col items-center space-y-4">
//             <div>
//                 <p className="text-3xl font-bold text-cyan-400">My Portfolio</p>
//             </div>
//             <ul className="flex space-x-6">
//                 <li><a href="#home" className="hover:text-cyan-400">MY PORTFOLIO</a></li>
//                 <li><a href="#about" className="hover:text-cyan-400">About</a></li>
//                 <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
//                 <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
//             </ul>
//         </nav>       
//     );
// };

// export default Navbar;


const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-semibold"><a href="#home">KOSI</a></h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li><a href="#about" className="hover:text-gray-900">About Me</a></li>
        <li><a href="#skills" className="hover:text-gray-900">Skills</a></li>
        <li><a href="#projects" className="hover:text-gray-900">Project</a></li>
        <li><a href="#contact" className="hover:text-gray-900">Contact Me</a></li>
      </ul>

      {/* Resume Button */}
      <a href="/resume.pdf" download className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
        <span>Resume</span>
      </a>
    </nav>
  );
};

export default Navbar;

