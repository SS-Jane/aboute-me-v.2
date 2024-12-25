import PropTypes from "prop-types";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out">
      <header className="shadow-md ">
        <Nav />
      </header>

      <main className="flex-grow container mx-auto px-4 py-6 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">{children}</main>
      <footer className="bg-gray-100 border-t border-gray-300 shadow-md py-4 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out dark:border-black">
        <Footer />
      </footer>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
