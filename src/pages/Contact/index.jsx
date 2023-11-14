import React from "react";
import Header from "../../containers/Header/OtherPages/index";
import Footer from "../../components/footer/index";
import video from "../../assets/video/AI.mp4";
import "./index.css";
export default function Home() {
  return (
    <div>
      <Header disableIntro={true} video={video} />
      <main>
       
      </main>
    </div>
  );
}
