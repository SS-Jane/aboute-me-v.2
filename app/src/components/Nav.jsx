import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SwitchTheme from "./Nav/SwitchTheme";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="z-10 bg-white shadow-md dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out">
      <nav className="container mx-auto p-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="logo basis-1/5">
          <Link
            to="/"
            className="font-extrabold text-2xl text-gray-800 dark:text-white flex justify-start items-center"
          >
            <img src="\src\assets\android-chrome-512x512.png" alt="logo" className="h-10"/><p className="text-blue-500 ml-2">SuperJane</p>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-md focus:outline-none "
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="text-2xl text-gray-600 mt-4 dark:text-white "
          />
        </button>

        <div
          className={`basis-3/5 lg:flex flex-col lg:flex-row w-auto my-2 flex-auto items-center justify-center gap-2 bg-white lg:bg-transparent lg:shadow-none transition-all duration-300 ease-in-out overflow-hidden lg:max-h-full lg:opacity-100 ${
            isMenuOpen ? "max-h-96 opacity-100 mb-4 dark:bg-gray-900  " : "max-h-0 opacity-0 "
          }`}
        >
          {/* className="navigation flex flex-col lg:flex-row items-center gap-2 mt-4 lg:mt-0" */}
          <Link
            to="/"
            className="btn-ghost btn-2 mx-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="btn-ghost btn-2 mx-1"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/projects"
            className="btn-ghost btn-2 mx-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="btn-ghost btn-2 mx-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="lg:mt-0 basis-1/5 flex justify-end">
          <SwitchTheme />
        </div>

      </nav>
    </header>
  );
};

export default Nav;
