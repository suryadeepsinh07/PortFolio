import "./App.css";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import Social from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <Social />
      <Home />
      <About></About>
      <Portfolio></Portfolio>
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
