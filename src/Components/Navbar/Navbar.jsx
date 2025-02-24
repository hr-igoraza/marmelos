import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


    const linkClasses = ({ isActive }) =>
        `block px-4 py-2 text-[#ffffff] relative after:content-[''] after:block after:h-[5px] after:bg-primary-green after:w-0 after:-mx-2 after:transition-all after:duration-300 ${
          isActive ? " after:w-[calc(100%+16px)]" : " hover:after:w-[calc(100%+16px)]"
        }`;
      

  return (
    <nav className="navbar  p-4">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <a href="#" >
            <img width={150} src="/images/logo.svg" alt="logo" />
          </a>
          <ul className=" ml-15 hidden md:flex gap-6 items-center red-hat semibold  md:text-[#ffffff]">
            <li>
              <NavLink to="/" className={linkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/booking" className={linkClasses}>
                Booking
              </NavLink>
            </li>
            <li>
              <NavLink to="/food" className={linkClasses}>
                Food
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={linkClasses}>
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/touristdestinations" className={linkClasses}>
                Tourist Destinations
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={linkClasses}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Hamburger Button */}
        <button className="md:hidden block text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Links */}
        <ul className={`md:hidden mob  bg-white absolute top-16 left-0 w-full  flex flex-col items-center shadow-md transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"}`}>
        <li >
              <NavLink to="/" className={linkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/booking" className={linkClasses}>
                Booking
              </NavLink>
            </li>
            <li>
              <NavLink to="/food" className={linkClasses}>
                Food
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={linkClasses}>
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/touristdestinations" className={linkClasses}>
                Tourist Destinations
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={linkClasses}>
                Contact
              </NavLink>
            </li>
        </ul>
      </div>
    </nav>
  );
}
