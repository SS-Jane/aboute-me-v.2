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
    <div className="relative inline-block text-left">
      <button
        className="flex items-center justify-center w-48 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 round-md shadow-sm hover:bg-gray-50 focus:outline-none"
        onClick={toggleDropdown}
      >
        {selected}
        {isDropdownOpen ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            bounce
            className="w-5 h-5 text-gray-500"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            bounce
            className="w-5 h-5 text-gray-500"
          />
        )}
      </button>
      {isDropdownOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option, index) => {
            return (
              <li key={index}>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
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
