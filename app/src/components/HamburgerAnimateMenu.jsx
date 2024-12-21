import { cn } from "../lib/utils";
import PropTypes from "prop-types";

const HamburgerButton = ({ isOpen, onClick, className }) => {
  return (
    <button
        className={cn("relative w-10 h-10 focus:outline-none", className)}
        onClick={onClick}
        aria-label="Toggle menu"
      >
        <div className="pt-1 absolute top-3/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-6 h-6">
          <span
            className={cn(
              "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
              isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-6 bg-current transform transition-all duration-300",
              isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            )}
          />
        </div>
      </button>
   
  );
};

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default HamburgerButton;
