
const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm font-mono">
      {/* Left - Logo & Branding */}
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span className="text-2xl">👽</span>
        <span>TK-KOSI</span>
      </div>

      {/* Right - Copyright & Credits */}
      <div className="text-center md:text-right">
        <p>&copy; {new Date().getFullYear()} Kosi</p>
        <p className="text-gray-400">My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
