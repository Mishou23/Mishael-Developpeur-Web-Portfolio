import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.css";

const ImageSlider = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const { i18n } = useTranslation();

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(1, prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(projects.length, prevSlide + 1));
  };

  return (
    <div className="image-slider">
      <button className="prev-button" onClick={goToPrevSlide}>
        &lt;
      </button>

      <div
        className="slider-container"
        style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}
      >
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={`/${i18n.language}/${project.title.replace(/\s+/g, "-")}/${project.id}`}
            className={`slide-item ${index + 1 === currentSlide ? "active" : ""}`}
          >
            <p className="image-title">{project.title}</p>
            <img
              src={project.images[0].path}
              alt={`Slide ${index + 1}`}
              className="slide-image"
              onClick={() => console.log(`Image ${project.id} Clicked!`)}
            />
          </Link>
        ))}
      </div>
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
