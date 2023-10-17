import "./style.css";
import ProjectImg from '../../assets/images/Portfolio_Sophie.jpg'
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
        <article className="project">
          <div className="proj-image">
            <img src={ProjectImg} alt="portfolio d'architecte"/>
          </div>
          <div className="proj-content">
            <div className="proj-title">
              <h4>Portfolio Architecte Sophie Blue</h4>
            </div>
            <div className="proj-des">
              <p>lores</p>
            </div>
            <div className="proj-links">
              <div className="link">
                <a href="https://github.com/Mishou23/OpenclassroomProject6" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="demo-link">
                <a href="#">Live Demo</a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
    </section>
  );
}
