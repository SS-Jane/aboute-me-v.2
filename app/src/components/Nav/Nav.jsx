import { Link } from "react-router-dom";
import { useState } from "react";
import SwitchTheme from "./SwitchTheme";
import HamburgerButton from "../HamburgerAnimateMenu";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80 dark:text-white transition-all duration-300">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="\src\assets\android-chrome-512x512.png"
              alt="logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-bold text-xl text-blue-500">SuperJane</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="btn-ghost btn-2 mx-1 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="btn-ghost btn-2 mx-1 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/projects"
              className="btn-ghost btn-2 mx-1 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="btn-ghost btn-2 mx-1 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div className="hidden md:block">
              <SwitchTheme />
            </div>
            <div className="md:hidden block items-center">
              <HamburgerButton
                isOpen={isMenuOpen}
                onClick={toggleMenu}
                className="text-gray-600 dark:text-gray-200"
              />
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-72 opacity-100 mt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col justify-center item-center space-y-4 py-4">
            <Link
              to="/"
              className="text-gray-900 dark:text-gray-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-gray-900 dark:text-gray-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            <Link
              to="/projects"
              className="text-gray-900 dark:text-gray-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="text-gray-900 dark:text-gray-200 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 flex justify-center items-center">
              <SwitchTheme />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
