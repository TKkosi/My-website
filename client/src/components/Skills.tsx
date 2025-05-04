import { BiLogoTypescript } from "react-icons/bi";
import {FaBootstrap, FaCss3Alt, FaDocker, FaGitAlt, FaGithubSquare, FaHtml5, FaJs, FaNodeJs, FaReact, FaSass} from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs, SiPostman } from "react-icons/si";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  }

const Skills = () => {
  const skills : Skill[] = [
    {name:"JavaScript",icon:<FaJs/>},
    {name: "TypeScript", icon:<BiLogoTypescript/>},
    {name: "React.js", icon:<FaReact/>},
    {name: "MongoDB", icon:<SiMongodb/>},
    {name: "Next.js", icon:<SiNextdotjs/>},
    {name: "Node.js", icon:<FaNodeJs/>},
    {name: "Express.js", icon:<SiExpress/>},
    {name: "HTML", icon:<FaHtml5/>},
    {name: "CSS", icon:<FaCss3Alt/>},
    {name: "Tailwind CSS", icon:<RiTailwindCssFill/>},
    {name: "Bootstrap", icon:<FaBootstrap/>},
    {name: "Sass", icon:<FaSass/>},
    {name:"GraphQL", icon:<GrGraphQl/>},
    {name:"Docker",icon:<FaDocker/>},
    {name:"Git",icon:<FaGitAlt/>},
    {name:"GitHub",icon:<FaGithubSquare/>},
    {name:"Postman",icon:<SiPostman/>},
  ];

  const [displayedSkills, setDisplayedSkills] = useState(skills);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayedSkills(skills.slice(0, 6));
      } else {
        setDisplayedSkills(skills);
      }
    };

    // Run on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="text-center py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-white font-mono" id="skills">
      <h2 className="text-4xl font-bold mb-8">
        My <span className="text-black font-bold">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8 px-10 justify-center items-center">
        {displayedSkills.map((skill, index) => (
          <div
            key={index}
            className="p-6 border-2 rounded-lg text-lg border-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white flex items-center justify-center cursor-pointer"
          >
            <div className="text-3xl mr-2">{skill.icon}</div>
            <p className="font-mono">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

