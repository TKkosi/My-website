// import { FaFacebook, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white">
      {/* Left Content */}
      <div className="max-w-lg text-left">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hello I’m <span className="text-black">Evren Shah.</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Frontend <span className="border-b-4 border-black">Developer</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mt-2">
          Based In <span className="text-black">India.</span>
        </h3>

        <p className="text-gray-600 mt-4">
          I'm Evren Shah. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry’s standard
          dummy text ever since the 1500s.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="#" className="p-3 bg-black text-white rounded-md">
            {/* <FaFacebook /> */}
          </a>
          <a href="#" className="p-3 bg-black text-white rounded-md">
            {/* <FaInstagram /> */}
          </a>
          <a href="#" className="p-3 bg-black text-white rounded-md">
            {/* <FaTwitter /> */}
          </a>
          <a href="#" className="p-3 bg-black text-white rounded-md">
            {/* <FaDiscord /> */}
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <img src="/hero-image.png" alt="Developer" className="w-[400px]" />
      </div>
    </section>
  );
};

export default Hero;

