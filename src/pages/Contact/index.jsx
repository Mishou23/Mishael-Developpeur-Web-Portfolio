import React from "react";
import Header from "../../containers/Header/OtherPages/index";
import Form from "../../containers/Contact/index";
import Footer from "../../components/footer/index";
import video from "../../assets/video/AI.mp4";
import "./index.css";
export default function Home() {
  return (
    <>
      <Header disableIntro={true} video={video} />
      <main>
        <Form />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
