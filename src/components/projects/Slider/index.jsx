import React, { useState, useRef } from 'react';
import './style.css';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const sliderRef = useRef(null);

  const handleDragStart = (event) => {
    setDragStart(event.clientX || event.touches[0].clientX);
  };

  const handleDragEnd = (event) => {
    const dragEnd = event.clientX || event.changedTouches[0].clientX;
    const dragDifference = dragEnd - dragStart;

    if (dragDifference > 50) {
      goToPrevSlide();
    } else if (dragDifference < -50) {
      goToNextSlide();
    }
  };

  const handleDragMove = (event) => {
    event.preventDefault();
    const dragCurrent = event.clientX || event.touches[0].clientX;
    const dragDifference = dragCurrent - dragStart;
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(0, prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(images.length - 1, prevSlide + 1));
  };

  return (
    <div
      className="image-slider"
      ref={sliderRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDragMove}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDragMove}
    >
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
