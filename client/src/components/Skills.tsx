// import React from "react";
// import SkillCard from "./SkillCard";
// import { FaJs, FaGit, FaSass, FaNodeJs } from "react-icons/fa";
// import { SiNestjs, SiStorybook, SiSocketdotio } from "react-icons/si";

const Skills = () => {
  const skills = [
    // { icon: <FaGit />, name: "Git" },
    // { icon: <FaJs />, name: "JavaScript", isActive: true },
    // { icon: <FaSass />, name: "Sass/Scss" },
    // { icon: <SiNestjs />, name: "Nest.Js" },
    // { icon: <SiStorybook />, name: "Storybook" },
    // { icon: <FaGit />, name: "Git" },
    // { icon: <SiStorybook />, name: "Storybook" },
    // { icon: <SiSocketdotio />, name: "Socket.io" },
    // { icon: <FaSass />, name: "Sass/Scss" },
  ];

  return (
    <section className="text-center py-20">
      <h2 className="text-4xl font-bold">
        My <span className="text-black">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-10">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} isActive={skill.isActive} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
