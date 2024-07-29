import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import GlobalStyles from "./GlobalStyles";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <div className="container">
      <GlobalStyles />
      <HeroSection />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
