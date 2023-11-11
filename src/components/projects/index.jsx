import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import ImageSlider from "./ImageSlider/index";
import projectData from "./ProjectData/index";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projectContainer" id="portfolio">
      <div className="all-proj-content">
        <div className="title">
          <h2>{t("PortfolioTitle")}</h2>
        </div>
        <div className="title-des">
          <h3>{t("PortfolioDescription")}</h3>
        </div>
        <section className="all-projects">
          {projectData.map((project, index) => (
            <div
              className={`project ${index % 2 === 0 ? "directSwitch" : ""}`}
              key={index}
            >
              <div className="proj-image">
                <ImageSlider images={project.images} />
              </div>
              <div className="proj-content">
                <div className="proj-title">
                  <h4>{t(`Project${project.id}Title`)}</h4>
                </div>
                <div className="proj-des">
                  <p>{t(`Project${project.id}Description`)}</p>
                </div>
                <div className="proj-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <img
                      key={techIndex}
                      src={tech}
                      alt={`Tech ${techIndex}`}
                      className="tech-icon"
                    />
                  ))}
                </div>
                <div className="proj-links">
                  <div className="git-text">
                    <p>Code</p>
                  </div>
                  <div className="link">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                  <div className="demo-link">
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
