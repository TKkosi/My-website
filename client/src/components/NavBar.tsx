import { NavLink } from "react-router-dom"

const NavBar = () => {
return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <NavLink to="/" className="hover:underline" end>
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/portfolio" className="hover:underline">
            Portfolio
          </NavLink>
          <NavLink to="/blog" className="hover:underline">
            Blog
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
)
}

export default NavBar