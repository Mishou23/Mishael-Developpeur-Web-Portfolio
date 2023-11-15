import React from "react";
import Navbar from "../../../components/header/nav/index";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import Video from "../../../assets/video/AI.mp4";
import projectData from "../../../components/projects/ProjectData/index";
import "./index.css";

export default function PageHeader({ hideVideo }) {
  const { t } = useTranslation();
  const { id } = useParams();
  const location = useLocation();

  // Find the project based on the id parameter
  const currentProject = projectData.find((project) => String(project.id) === id);

  // Extract the language and page name from the URL
  const [, language, page] = location.pathname.split('/');

  // Assuming 'pageTitle' is based on the pageName parameter
  const pageTitleKey = page || "defaultTitle"; // Provide a default title if pageName is not present
  const pageTitle = t(pageTitleKey);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="pageTitle">
          <h1>{pageTitle}</h1>
        </div>
        {currentProject && (
          <img src={currentProject.images[0].path} alt="Page Header" className="project-bg" />
        )}
        {!hideVideo && (
          <video autoPlay muted loop className="video-bg">
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </>
  );
}
