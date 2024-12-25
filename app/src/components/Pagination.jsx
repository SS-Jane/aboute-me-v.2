import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="pagination mt-8 flex justify-center space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-4 border rounded-md ${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-400"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
