import React from 'react';
import "./style.css";
import projectData from './ProjectData/index'; 

export default function Projects() {
  return (
    <section className="projectContainer" id="portfolio">
      <div className="all-proj-content">
        <div className="title">
          <h2>Portfolio</h2>
        </div>
        <div className="title-des">
          <h3>Chaque projet constitue un développement unique en son genre</h3>
        </div>
        <section className="all-projects">
          {projectData.map((project, index) => (
            <article className={`project ${index % 2 === 0 ? 'directSwitch' : ''}`} key={index}>
              <div className="proj-image">
                <img src={project.image} alt="portfolio d'architecte" />
              </div>
              <div className="proj-content">
                <div className="proj-title">
                  <h4>{project.title}</h4>
                </div>
                <div className="proj-des">
                  <p>{project.description}</p>
                </div>
                <div className="proj-links">
                  <div className="link">
                    <a href={project.githubLink} target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                  <div className="demo-link">
                    <a href={project.liveDemoLink}>Live Demo</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
