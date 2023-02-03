import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import SocialLinks from "./pages/SocialLinks/SocialLinks";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
