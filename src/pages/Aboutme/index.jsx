import React from "react";
import AboutMeContainer from "../../containers/Aboutme/index";
import Header from "../../containers/Header/OtherPages/index";
import "./index.css";

export default function AboutMePage() {
  return (
    <>
      <Header />
      <main>
        <AboutMeContainer />
      </main>
    </>
  );
}
