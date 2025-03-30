import { FaExternalLinkAlt } from "react-icons/fa";
import img1 from "../assets/img1.svg"; // Adjust the path as necessary

const projects = [
  {
    id: 1,
    title: "Euphoria – Ecommerce (Apparels) Website Template",
    description:
      "A modern, responsive e-commerce website template designed for apparel brands.",
    image: img1, // Replace with actual image path
    link: "#",
  },
  {
    id: 2,
    title: "Blog Website Template",
    description:
      "A minimal and stylish blog template for sharing articles and content.",
    image: img1, // Replace with actual image path
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    image: img1, // Replace with actual image path
    link: "#",
  }
];

const Projects = () => {

  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 xl:px-32 bg-black text-white font-mono">
      <h2 className="text-3xl md:text-4xl font-extralight text-center mb-8">
        My <span className="text-gray-300 font-extrabold">Projects</span>
      </h2>
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="min-w-[90vw] md:min-w-[60vw] lg:min-w-[40vw] snap-center p-6 bg- rounded-lg shadow-lg flex flex-col md:flex-row items-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 rounded-lg"
            />
            <div className="md:ml-6 mt-4 md:mt-0">
              <h1 className="text-2xl font-bold">{`0${project.id}`}</h1>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 flex items-center mt-2"
              >
                View Project <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

