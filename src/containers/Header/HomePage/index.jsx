import React from "react";
import Navbar from "../../../components/header/nav/index";
import Intro from "../../../components/header/index";
import "./index.css";

export default function Header({ disableIntro, video }) {
  return (
    <header>
      <Navbar />
      <section className="header-container">
        {/* Video background */}
        <video autoPlay muted loop className="video-background">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Conditionally render Intro based on the 'disableIntro' prop */}
        {!disableIntro && <Intro />}
      </section>
    </header>
  );
}
