import PropTypes from "prop-types";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-all duration-300">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md transition-all duration-300">
        <Nav />
      </header>

      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
        <ScrollToTopButton/>
      </main>

      <footer className="border-t bg-background transition-all duration-300">
        <Footer />
      </footer>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
