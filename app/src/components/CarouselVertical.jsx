import PropTypes from "prop-types";

PropTypes;

const CarouselVertical = ({ images }) => {
  if (!images || images.length === 0) return null;

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <section className="flex gap-4">
      <div className="carousel carousel-vertical h-96 rounded-xl shadow-xl dark:shadow-neon">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              id={`slide-vertical-${index}`}
              className="carousel-item w-full h-[400px]"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center gap-2">
        {images.map((_, index) => {
          return (
            <a
              key={index}
              href={`#slide-vertical-${index}`}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
              onClick={handleNavClick}
            />
          );
        })}
      </div>
    </section>
  );
};

CarouselVertical.propTypes = {
  images: PropTypes.array.isRequired,
};

export default CarouselVertical;
