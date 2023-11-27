import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./index.css";
import projectData from "../../../components/projects/ProjectData";

export default function AllProjects() {
  const { i18n } = useTranslation();
  return (
    <>
      <section className="projectsContainer">
        <div className="projectsContent">
          <div className="project-group">
            {projectData.map((project, index) => (
              <div key={project.id} className="project-item">
                <Link
                  key={project.id}
                  to={`/${i18n.language}/${project.title.replace(
                    /\s+/g,
                    "-"
                  )}/${project.id}`}
                >
                  <p className="projectImg-title">{project.title}</p>
                  <img
                    src={project.images[0].path}
                    alt={`Project-Image ${index + 1}`}
                    className="Project-Image"
                    onClick={() => console.log(`Image ${project.id} Clicked!`)}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
