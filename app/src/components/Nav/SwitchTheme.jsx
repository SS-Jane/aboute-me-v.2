import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons"

const SwitchTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  return (
    <button
      className="px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 hover:text-blue-400 transition flex items-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:text-orange-400"
      aria-label="Toggle Mode"
      // eslint-disable-next-line react/no-unknown-property
      onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-xl items-center" />
    </button>
  );
};

export default SwitchTheme;
