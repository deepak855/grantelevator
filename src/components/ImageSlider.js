// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import img_1 from './images/image_1.webp';
import img_2 from './images/image_2.avif';
import img_3 from './images/image_3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'
const ImageSlider = () => {
  const images = [img_1, img_2, img_3];

  // Slider settings
  const settings = {
    dots: true,            // Enable navigation dots
    infinite: true,        // Enable infinite scrolling
    speed: 500,            // Transition speed in ms
    slidesToShow: 1,       // Show 1 slide at a time
    slidesToScroll: 1,     // Scroll 1 slide at a time
    autoplay: true,        // Enable auto-play
    autoplaySpeed: 2000,   // Speed of auto-play in ms
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="slider-image"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
