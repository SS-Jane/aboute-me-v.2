import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CarouselHorizon = ({ images }) => {
  if (!images || images.length === 0) return null;

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <section className="space-y-4">
      <div className="carousel w-full rounded-xl overflow-hidden shadow-xl dark:shadow-neon">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              id={`slide${index}`}
              className="carousel-item relative w-full"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] lg:h-[400px] object-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${index === 0 ? images.length - 1 : index - 1}`}
                  className="btn-cycle bg-white/20 hover:bg-white/40 backdrop-blur-sm dark:bg-black/20 dark:hover:bg-black/40"
                  onClick={handleNavClick}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </a>
                <a
                  href={`#slide${index === images.length - 1 ? 0 : index + 1}`}
                  className="btn-cycle bg-white/20 hover:bg-white/40 backdrop-blur-sm dark:bg-black/20 dark:hover:bg-black/40"
                  onClick={handleNavClick}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-2">
        {images.map((_, index) => {
          return (
            <a
              key={index}
              href={`#slide${index}`}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
              onClick={handleNavClick}
            />
          );
        })}
      </div>
    </section>
  );
};

CarouselHorizon.propTypes = {
  images: PropTypes.string.isRequired,
};

export default CarouselHorizon;
