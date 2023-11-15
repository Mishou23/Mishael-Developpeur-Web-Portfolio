import Header from "../../../containers/Header/OtherPages/index";
import AllProjects from "../../../containers/Projects/project/index";
import "./index.css";
export default function Projects() {
    return (
      <>
        <Header hideVideo={true} />
        <main>
          <AllProjects />
        </main>
      </>
    );
  }
  