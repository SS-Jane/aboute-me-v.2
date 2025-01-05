import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const DropdownFilter = ({ label, options, onSelect }) => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  const toggleDropdown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    onSelect(option);
    setIsDropDownOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full ">
      <button
        className="flex items-center justify-between w-full sm:w-80 px-4 py-2 text-gray-600 dark:text-gray-400  dark:border-gray-700 border rounded-md 
        bg-gray-50 dark:bg-gray-800 text-foreground border-gray-300
        hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition-all duration-300"
        onClick={toggleDropdown}
      >
        <span className="truncate">{selected}</span>
        {isDropdownOpen ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            bounce
            className="w-5 h-5 text-gray-500 ml-2"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            bounce
            className="w-5 h-5 text-gray-500 ml-2"
          />
        )}
      </button>
      {isDropdownOpen && (
        <ul className="absolute z-50 w-full mt-2 border border-gray-300 dark:text-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-md shadow-lg max-h-60 overflow-auto transition-all duration-200">
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

DropdownFilter.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default DropdownFilter;
