// App.jsx

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/index";
import AboutMe from "./pages/Aboutme/index";
import Projects from "./pages/Projects/allProjects/index";
import Project from "./pages/Projects/project/index";
import Contact from "./pages/Contact/index";
import Error from "./pages/ErrorPage/index";
import AOS from "aos";
import "aos/dist/aos.css";
import WebFont from 'webfontloader';
import "./App.css";

function App() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    WebFont.load({
      google: {
        families: ['Orbitron', 'Expletus Sans']
      }
    });
    const handleScroll = () => {
      const scrollThreshold = 100;
      const isScrolled = window.scrollY > scrollThreshold;
      const isPageHeightEnough =
        document.body.scrollHeight > window.innerHeight + scrollThreshold;

      setShowScrollUp(isScrolled && isPageHeightEnough);
    };

    document.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = (event) => {
    if (
      event.target.tagName.toLowerCase() === "a" ||
      event.target.tagName.toLowerCase() === "span" ||
      event.target.classList.contains("scrollUp")
    ) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const handleJumptoTop = (event) => {
    const sliderImg = event.target.classList.contains("slide-image");

    if (sliderImg) {
      event.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  document.addEventListener("click", handleJumptoTop);

  document.addEventListener("click", handleScrollTop);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/" element={<Home />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/accueil" element={<Home />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/home" element={<Home />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/a-propos" element={<AboutMe />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/about-me" element={<AboutMe />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/projets" element={<Projects />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/projects" element={<Projects />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/:title/:id" element={<Project />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/contact" element={<Contact />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/contact" element={<Contact />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/:lang/error" element={<Error />} />
          <Route path="https://developpeur-web-mishael-portfolio.onrender.com/fr/error" element={<Error />} />
          <Route path="*" element={<Navigate to="https://developpeur-web-mishael-portfolio.onrender.com//fr/error" />} />
        </Routes>
        <div className={`btnScrollUp ${showScrollUp ? "" : "hidden"}`}>
          <div className="scrollUp"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
