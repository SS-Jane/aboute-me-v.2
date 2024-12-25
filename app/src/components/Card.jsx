import PropTypes from "prop-types";

const Card = ({ img, title, categories }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl dark:hover:shadow-neon dark:hover:animate-glow">
      <a href="#" className="block">
        <figure>
          <img src={img} alt={title} className="w-full h-48 object-cover sm:h-60 lg:h-72" />
          <figcaption className="p-4">
            <h1 className="text-lg font-bold text-gray-800 dark:text-gray-100 truncate">
              {title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-200 mt-2 line-clamp-2 truncate">
              {categories}
            </p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};

export default Card;
