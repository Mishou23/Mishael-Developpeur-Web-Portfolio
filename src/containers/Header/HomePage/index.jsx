import React, { useState, useEffect } from "react";
import Navbar from "../../../components/header/nav/index";
import Intro from "../../../components/header/index";
import "./index.css";

export default function Header({ disableIntro, video }) {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - scrollPosition / 500; // Adjust 500 to control the scroll distance for the fade-out
      setScrollOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar />
      <section className="header-container">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          className="video-background"
          style={{ opacity: scrollOpacity }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Fade-out overlay */}
        <div className={`fade-out ${scrollOpacity < 0.1 && "hide"}`} />

        {disableIntro || <Intro />}
      </section>
    </header>
  );
}
