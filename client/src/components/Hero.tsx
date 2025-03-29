import { FaFacebook, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import img1 from "../assets/img1.svg"; // Adjust the path as necessary

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 text-black py-20 bg-white font-mono">
      {/* Left Content */}
      <div className=" text-center lg:text-left lg:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-light">
          Hello, I'm <span className="text-black font-extrabold">Ekwuno Kosisochukwu</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold">
          Full-stack <span className="border-b-4 border-black px-2">Developer</span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Based In <span className="text-extrabold">Nigeria.</span>
        </h2>

        <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed max-w-md">
          I'm Ekwuno kosisochukwu. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start pt-4 space-x-4 mt-6">
          <a href="#" className="border-2 border-black p-2 rounded hover:bg-black hover:text-white transition">
            <FaFacebook />
          </a>
          <a href="#" className="border-2 border-black p-2 rounded hover:bg-black hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" className="border-2 border-black p-2 rounded hover:bg-black hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="border-2 border-black p-2 rounded hover:bg-black hover:text-white transition">
            <FaDiscord />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
        <img src={img1} alt="Developer" className="w-full max-w-sm md:max-w-md" />
      </div>
    </section>
  );
};

export default Hero;

