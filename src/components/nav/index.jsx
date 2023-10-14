import "./index.css";
import React from "react";
import Logo from '../../assets/images/logo_img.png'
export default function Navbar() {
  return (
    <nav>
      <div className="container-nav">
        <div className="imageContainer">
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <div>
              <a href="#accueil">Accueil</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#a-propos">A propos</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#portfolio">Portfolio</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#contact">Contact</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
