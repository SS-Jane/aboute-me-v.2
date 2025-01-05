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
    <section className="flex flex-col md:flex-row gap-4 w-full max-w-screen-lg mx-auto">
      <div className="carousel carousel-vertical h-96 rounded-xl shadow-xl dark:shadow-neon">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              id={`slide-vertical-${index}`}
              className="carousel-item w-full h-auto max-h-[400px] md:max-h-[500px]"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row md:flex-col justify-center gap-2">
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
