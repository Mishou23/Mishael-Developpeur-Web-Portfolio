import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectData from "../../../components/projects/ProjectData/index";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import "./index.css";

export default function Project() {
  const { t } = useTranslation();
  const { id, lang: urlLang } = useParams();
  const [lang, setLang] = useState(urlLang || "fr");
  const currentProject = projectData.find(
    (project) => String(project.id) === id
  );

  useEffect(() => {
    // Update language if the URL language changes
    setLang(urlLang || "fr");
  }, [urlLang]);

  if (!currentProject) {
    return <p>Project not found</p>;
  }

  const getDescription = () => {
    return lang === "fr"
      ? currentProject.description.fr
      : currentProject.description.en;
  };

  return (
    <>
      <section className="projectContainer">
        <article className="projectContent">
          <div className="image">
            <img src={currentProject.images[0].path} alt="Project image" />
          </div>
          <div className="proj-des">
            <p>{getDescription()}</p>
          </div>
          <div className="proj-skills">
            <h3>{t("Skills")}</h3>
          </div>
          <div className="proj-tech">
            <div className="allTechItems">
              {currentProject.technologies.map((tech, index) => (
                <div key={index}>
                  <div className="tech-item">
                    <img src={tech} alt={`Technology ${index + 1}`} />
                    <div className="tech-text">
                      <p>
                        {" "}
                        {projectData[Number(id) - 1].technologiesText[index]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="proj-all-links">
            <div className="proj-linksTitle">
              <h3>{t("Link")}</h3>
            </div>
            <div className="links">
              <div class="projGitLink">
                <a
                  href={currentProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
              {currentProject.liveDemoLink && (
                <div className="demo-link">
                  <a
                    href={currentProject.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                  <p> Live Demo</p>
                </div>
              )}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
