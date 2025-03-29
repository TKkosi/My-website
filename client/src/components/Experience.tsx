import { FaGoogle, FaYoutube, FaApple } from "react-icons/fa";

const experiences = [
  {
    company: "Google",
    role: "Lead Software Engineer",
    date: "Nov 2018 - Present",
    description:
      "As a senior software engineer at Google, I played a pivotal role in developing AI-driven solutions for Google's core search algorithms. I contributed to enhancing search accuracy, optimizing data pipelines, and scaling services for billions of users worldwide.",
    icon: <FaGoogle size={24} className="text-red-500" />,
  },
  {
    company: "YouTube",
    role: "Software Engineer",
    date: "Jan 2017 - Oct 2019",
    description:
      "At YouTube, I focused on backend architecture for scalable video streaming services. My work included optimizing database performance, improving API efficiency, and implementing high-availability solutions for millions of concurrent users.",
    icon: <FaYoutube size={24} className="text-red-600" />,
  },
  {
    company: "Apple",
    role: "Junior Software Engineer",
    date: "Jan 2016 - Dec 2017",
    description:
      "During my tenure at Apple, I contributed to software architecture improvements and UI enhancements in Apple’s ecosystem. I played a key role in refining macOS security protocols and integrating new cloud services.",
    icon: <FaApple size={24} className="text-gray-300" />,
  },
    {
        company: "Microsoft",
        role: "Intern Software Engineer",
        date: "Jun 2015 - Dec 2015",
        description:
        "As an intern at Microsoft, I assisted in developing cloud-based applications and participated in code reviews. I gained hands-on experience with Azure services and collaborated with cross-functional teams to deliver high-quality software.",
        icon: <FaApple size={24} className="text-gray-300" />,
    },
];

const Experience = () => {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 xl:px-32 bg-black text-white font-mono">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        My <span className="text-gray-300">Experience</span>
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center"
          >
            <div className="mr-4">{exp.icon}</div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{exp.role} at {exp.company}</h3>
              <p className="text-gray-400 text-sm mb-2">{exp.date}</p>
              <p className="text-gray-300 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
