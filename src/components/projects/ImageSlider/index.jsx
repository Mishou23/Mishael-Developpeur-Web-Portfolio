import React, { useState } from 'react';
import './style.css';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(0, prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(images.length - 1, prevSlide + 1));
  };

  return (
    <div className="image-slider">
      <button className="prev-button" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 38}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide-item ${index === currentSlide ? 'active' : ''}`}
          >
            <p className="image-title">{image.title}</p>
            <img
              src={image.path}
              alt={`Slide ${index + 1}`}
              className="slide-image"
              onClick={() => console.log('Image Clicked!')}
            />
          </div>
        ))}
      </div>
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
