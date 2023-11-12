import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import ImageSlider from "./ImageSlider/index";
import projectData from "./ProjectData/index";

export default function Projects() {
  const { t } = useTranslation();

  // Flatten the array of images from all projects
  const allImages = projectData.flatMap((project) => project.images);

  return (
    <section className="projectContainer" id="portfolio">
      <div className="all-proj-content">
        <div className="title">
          <h2>{t('ProjectTitle')}</h2>
        </div>
        <section className="all-projects">
          <div className="project">
            <div className="proj-image">
              <ImageSlider images={allImages} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}