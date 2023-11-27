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
import "./App.css";

function App() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
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
          <Route path="/" element={<Home />} />
          <Route path="/:lang/accueil" element={<Home />} />
          <Route path="/:lang/home" element={<Home />} />
          <Route path="/:lang/a-propos" element={<AboutMe />} />
          <Route path="/:lang/about-me" element={<AboutMe />} />
          <Route path="/:lang/projets" element={<Projects />} />
          <Route path="/:lang/projects" element={<Projects />} />
          <Route path="/:lang/:title/:id" element={<Project />} />
          <Route path="/:lang/contact" element={<Contact />} />
          <Route path="/:lang/contact" element={<Contact />} />
          <Route path="/:lang/error" element={<Error />} />
          <Route path="/fr/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/fr/error" />} />
        </Routes>
        <div className={`btnScrollUp ${showScrollUp ? "" : "hidden"}`}>
          <div className="scrollUp"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
