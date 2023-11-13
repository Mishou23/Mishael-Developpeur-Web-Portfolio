import React from "react";
import Header from "../../containers/Header/HomePage/index";
import AboutMe from "../../components/about";
import Projects from "../../components/projects/index";
import HomeContact from "../../components/contact/index";
import video from "../../assets/video/AI.mp4";
import "./index.css";
export default function Home() {
  return (
    <div>
      <Header disableIntro={false} video={video} />
      <main>
        <AboutMe />
        <Projects />
        <HomeContact />
      </main>
    </div>
  );
}
