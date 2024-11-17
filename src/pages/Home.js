// src/pages/Home.js
import React  from 'react';
import ImageSlider from '../components/ImageSlider';
import About from "./About"
import '../components/Home_page.css';
import Products from './Products';
const Home = () => {
  return (  
  <div style={{ overflowX: 'hidden', width: '100%' }} className='homepageStyle'> {/* Hide horizontal overflow */}
    <ImageSlider />   
    <About />    
    <br/>
    <Products/>
  </div>
  )
}

export default Home;
