import Header from "../../../containers/Header/OtherPages/index";
import AllProjects from "../../../containers/Projects/AllProjects/index";
import Footer from "../../../components/footer/index";
import "./index.css";
export default function Projects() {
    return (
      <>
        <Header />
        <main>
          <AllProjects />
        </main>
        <Footer/>
      </>
    );
  }
  