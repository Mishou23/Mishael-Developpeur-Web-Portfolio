import React from "react";
import Header from "../../containers/Header";
import AboutMe from "../../components/about";
import Projects from "../../components/projects/index";
import "./index.css";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}
