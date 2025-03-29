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
    <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-white font-mono">
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
            I'm a passionate, self-motivated designer and full-stack developer
            specializing in **React.js & Node.js**. I love bringing digital
            products to life with **user experience, UI design, and performance**
            in mind.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            My journey started in 2015, and since then, I’ve built numerous
            projects, overcoming challenges and learning new tech. From **React,
            TypeScript, Tailwind** to **MongoDB, GraphQL**, and more, I keep
            pushing my limits.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Beyond coding, I share insights on **Twitter** and **GitHub** about
            web development, open-source projects, and industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
