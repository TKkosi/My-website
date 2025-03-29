

const Skills = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GraphQL",
    "Tailwind CSS",
    "Firebase",
    "Docker",
    "Git & GitHub",
  ];

  return (
    <section className="text-center py-20">
      <h2 className="text-4xl font-bold">
        My <span className="text-black">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-gray-900 text-white text-lg font-semibold transition-transform transform hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

