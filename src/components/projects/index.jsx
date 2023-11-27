import { useTranslation } from "react-i18next";
import "./style.css";
import ImageSlider from "./Slider/index";
import projectData from "./ProjectData/index";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projectContainer" id="portfolio">
      <div className="all-proj-content">
        <div className="title">
          <h2>{t("ProjectTitle")}</h2>
        </div>
        <section className="all-projects">
          <div className="project">
            <div className="proj-image">
              <ImageSlider projects={projectData} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
