import React, { useState } from "react";
import "./Reviews.css";

const ReviewSlider = () => {
  const reviews = [
    { image: '/converted/Review1.webp' },
    { image: '/converted/Review2.webp' },
    { image: '/converted/Review3.webp' },
    { image: '/converted/Review4.webp' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="reviews-section">
      <h1 className="reviews-heading">What People Are Saying About Us</h1>
      <div className="slider-container">
        <button 
          onClick={handlePrev}
          className="nav-button prev"
          aria-label="Previous review"
        >
          ←
        </button>

        <div className="reviews-container">
          <div className="review-image-wrapper">
            <img
              src={reviews[activeIndex].image}
              alt={`Review ${activeIndex + 1}`}
              className="review-image"
            />
          </div>
        </div>

        <button 
          onClick={handleNext}
          className="nav-button next"
          aria-label="Next review"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ReviewSlider;
