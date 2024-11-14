// // src/components/ImageSlider.js
// import React from 'react';
// import Slider from 'react-slick';
// import img_1 from './images/image_1.avif';
// import img_2 from './images/image_2.avif';
// import img_3 from './images/image_3.avif';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './ImageSlider.css'
// const ImageSlider = () => {
//   const images = [img_1, img_2, img_3];

//   // Slider settings
//   const settings = {
//     dots: true,            // Enable navigation dots
//     infinite: true,        // Enable infinite scrolling
//     speed: 500,            // Transition speed in ms
//     slidesToShow: 1,       // Show 1 slide at a time
//     slidesToScroll: 1,     // Scroll 1 slide at a time
//     autoplay: true,        // Enable auto-play
//     autoplaySpeed: 2000,   // Speed of auto-play in ms
//   };

//   return (
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index} className="image-container">
//           <img
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="slider-image"
//           />
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default ImageSlider;


import React, { useState, useEffect } from 'react';
import img_1 from './images/image_1.avif';
import img_2 from './images/image_2.avif';
import img_3 from './images/image_3.avif';

import './ImageSlider.css'


const images = [
  img_1, // Replace with your image URLs
  img_2,
  img_3
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
      const offset = scrollY * (0.2 + i * 0.1); // Adjust speed for parallax effect
      slide.style.transform = `translateY(${offset}px) scale(1.05)`; // Parallax effect with slight zoom
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup event listener
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default ImageSlider;
