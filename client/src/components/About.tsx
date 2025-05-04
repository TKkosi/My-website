import img1 from "../assets/img1.svg";

// const About = () => {
//   return (
//     <section id="about" className="min-h-screen p-10 bg-white flex gap-[20px] flex-wrap justify-center items-center content-center">
//       <div className="w-1/4 ">
//         <img src={img1} alt="about" className="w-full" />
//       </div>
//       <div className="w-1/4 text-center mx-auto">
//         <h2 className="text-4xl font-bold text-black">About Me</h2>
//         <p className="text-zinc-500 mt-4">
//         I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;



const About = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-white font-mono" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src={img1} 
            alt="About Me"
            className="w-64 md:w-80 lg:w-96"
          />
        </div>

        {/* Right - Text */}
        <div>
          <h2 className="text-4xl font-bold">
            About <span className="text-black">Me</span>
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
          I am a passionate Full-Stack Developer with experience in designing and implementing scalable web applications. With a strong foundation in JavaScript, React.js, Node.js, and MongoDB, I thrive in solving complex problems and building high-performance solutions.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
          I specialize in both front-end and back-end development, ensuring seamless user experiences and efficient system architectures. My expertise includes API development, database optimization, DevOps practices, and real-time data visualization. Beyond coding, I am actively involved in tech communities, open-source projects, and content creation to share knowledge and grow professionally.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
          I aim to build impactful digital solutions that enhance user engagement and business efficiency. Whether through innovative web applications, data-driven insights, or automation, I am committed to leveraging technology to solve real-world problems. My goal is to continuously learn, collaborate, and contribute to the tech ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
