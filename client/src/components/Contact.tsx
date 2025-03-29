
// const Contact = () => {
//   return (
//     <section id="contact" className="min-h-screen p-10 bg-gray-900">
//       <h2 className="text-3xl font-bold text-cyan-400">Contact Me</h2>
//       <form className="mt-6 flex flex-col space-y-4">
//         <input type="text" placeholder="Name" className="p-3 bg-gray-800 text-white rounded-lg" />
//         <input type="email" placeholder="Email" className="p-3 bg-gray-800 text-white rounded-lg" />
//         <textarea placeholder="Message" className="p-3 bg-gray-800 text-white rounded-lg h-32"></textarea>
//         <button className="bg-cyan-400 text-black p-3 rounded-lg font-bold">Send Message</button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-12 font-mono">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-400 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-400 rounded-md"
            />
            <input
              type="text"
              placeholder="Your website (if any)"
              className="w-full p-3 border border-gray-400 rounded-md"
            />
            <textarea
              placeholder="How can I help?"
              rows={4}
              className="w-full p-3 border border-gray-400 rounded-md"
            />
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium">
              Get in Touch
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
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
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's <span className="text-gray-600">talk</span> for
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold">Something special</h2>
          <p className="text-gray-600 mt-4">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and interactive experiences.
          </p>

          <p className="mt-6 font-semibold text-lg">kosisochukwu13@yahoo.com</p>
          <p className="font-semibold text-lg">1234567890</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
