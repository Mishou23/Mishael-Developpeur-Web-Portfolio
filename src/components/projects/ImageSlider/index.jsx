import React, { useState } from 'react';
import './style.css';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <button className="prev-button" onClick={goToPrevSlide}>
          &lt;
        </button>
        <div className="slides">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            />
          ))}
        </div>
        <button className="next-button" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};
export default ImageSlider