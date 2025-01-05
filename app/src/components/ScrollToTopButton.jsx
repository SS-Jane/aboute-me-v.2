import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = document.documentElement.scrollHeight * 0.8;
      const currentScroll = window.scrollY + window.innerHeight;
      setIsVisible(currentScroll >= scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 p-2 bg-background/20 text-black rounded-full shadow-lg dark:bg-background/20 dark:text-white dark:shadow-neon transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faChevronUp} className="w-10 h-10" />
      </button>
    )
  );
};

export default ScrollToTopButton;
