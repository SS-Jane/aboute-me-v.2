import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="container-text text-lg font-bold text-gray-900/80 dark:text-gray-200/80">
          <p>Follow me</p>
        </div>
        <div className="container-social flex items-center justify-center space-x-6 md:space-x-8">
          <a href="http://" target="_blank" aria-label="Portfolio Website" className="text-gray-900 dark:text-gray-200/80 hover:text-gray-600 transition-colors duration-200 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <a href="http://" target="_blank" aria-label="Portfolio Github" className="text-gray-900 dark:text-gray-200/80 hover:text-gray-600 transition-colors duration-200 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="http://" target="_blank" aria-label="Portfolio X" className="text-gray-900 dark:text-gray-200/80 hover:text-gray-600 transition-colors duration-200 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="http://" target="_blank" aria-label="Portfolio Link in" className="text-gray-900 dark:text-gray-200/80 hover:text-gray-600 transition-colors duration-200 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="http://" target="_blank" aria-label="Portfolio Youtube" className="text-gray-900 dark:text-gray-200/80 hover:text-gray-600 transition-colors duration-200 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <div className="text-sm text-gray-900 dark:text-gray-200 mt-4">
          <p>&copy; 2024 React & Tailwind CSS Portfolio. SuperJane</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
