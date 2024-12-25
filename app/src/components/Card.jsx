import PropTypes from "prop-types";

const Card = ({ img, title, categories }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-tranaform transform hover:scale-105">
      <a href="http://" className="block">
        <figure>
          <img src={img} alt={title} className="w-full h-48 object-cover" />
          <figcaption className="p-4">
            <h1 className="text-lg font-bold text-gray-800 truncate">
              {title}
            </h1>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3 truncate">
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
  categories : PropTypes.string.isRequired,
};

export default Card;
