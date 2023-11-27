import React from "react";
import Header from "../../containers/Header/OtherPages/index";
import Error from "../../containers/Error/index";
import Footer from "../../components/footer/index";
import video from "../../assets/video/AI.mp4";
import "./index.css";
export default function Home() {
  return (
    <>
      <Header disableIntro={false} video={video} />
      <main>
        <Error />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
