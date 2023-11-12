import React, { useState } from 'react';
import './style.css';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 3 : prevSlide - 3));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 3 ? 0 : prevSlide + 3
    );
  };

  return (
    <div className="image-slider">
      <button className="prev-button" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}px)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slide-image"
            onClick={() => console.log('Image Clicked!')}
          />
        ))}
      </div>
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
