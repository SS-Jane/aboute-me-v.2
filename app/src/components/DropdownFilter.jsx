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
    <div className="inline-block text-left w-full sm:w-auto">
      <button
        className="bg-white dark:bg-gray-800 flex items-center justify-between w-full sm:w-48 px-4 py-2 font-medium text-gray-400 dark:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
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
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
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
