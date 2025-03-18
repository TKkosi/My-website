
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen p-10 bg-gray-900">
      <h2 className="text-3xl font-bold text-cyan-400">Contact Me</h2>
      <form className="mt-6 flex flex-col space-y-4">
        <input type="text" placeholder="Name" className="p-3 bg-gray-800 text-white rounded-lg" />
        <input type="email" placeholder="Email" className="p-3 bg-gray-800 text-white rounded-lg" />
        <textarea placeholder="Message" className="p-3 bg-gray-800 text-white rounded-lg h-32"></textarea>
        <button className="bg-cyan-400 text-black p-3 rounded-lg font-bold">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
