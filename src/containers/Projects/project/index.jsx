import { useParams } from "react-router-dom";
import projectData from "../../../components/projects/ProjectData/index";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

export default function Project() {
  const { id } = useParams();
  const currentProject = projectData.find((project) => String(project.id) === id);

  // Check if currentProject is defined before accessing its properties
  if (!currentProject) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <section className='projectContainer'>
        <article className='projectContent'>
          <div className='image'>
            <img src={currentProject.images[0].path} alt="Project image" />
          </div>
          <div className="proj-des">
            <p>{currentProject.description}</p>
          </div>
          <div className="proj-skills">
            <h3>Compétences</h3>
          </div>
          <div className="proj-tech">
            {currentProject.technologies.map((tech, index) => (
              <img key={index} src={tech} alt={`Technology ${index + 1}`} />
            ))}
          </div>
          <div className="proj-all-links">
          <div className="proj-linksTitle">
          <h3>Liens</h3>
          </div>
           <div className="links">
           <div class="projGitLink">
           <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer">
           <i class="fa-brands fa-github"></i>
           </a>
           </div>
           <div className="demo-link">
                    <a
                      href={currentProject.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                    </a>
                  </div>
           </div>
          </div>
        </article>
      </section>
    </>
  );
}
