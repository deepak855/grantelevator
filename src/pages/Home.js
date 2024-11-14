// src/pages/Home.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import ImageSlider from '../components/ImageSlider';
import img_1 from "../components/images/home_page_img_1.jpg"
import img_2 from "../components/images/home_page_img_2.jpg"
import img_3 from "../components/images/home_page_img_3.jpg"
import img_4 from "../components/images/photo-16.avif"
import '../components/Home_page.css';
const Home = () => (
  
  <div style={{ overflowX: 'hidden', width: '100%' }} className='homepageStyle'> {/* Hide horizontal overflow */}
    <ImageSlider />
    <div style={{ padding: '30px 20px', width: '100%', boxSizing: 'border-box' }}>
      <Grid container spacing={3} columns={16} sx={{  display: 'flex', justifyContent: 'center' ,border: 'none'}}>
        <Grid item xs={12} >
          <Paper sx={{ padding: '20px', border: 'none' ,
            boxShadow: 'none',   
            backgroundColor: 'transparent',  }} elevation={0}>
            <Typography variant="h4" sx={{ textAlign: 'center' , color : '#939393'}} className='fontSizeTitle'>About Teknix Elevators</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' ,fontSize: '24px' }} className='fontSizetext'>
              Teknix began with a simple concept: to achieve excellence in the vertical transportation industry. 
              Since four decades in the field of installation, modernization, and maintenance of elevators in 
              collaboration with SRH Aufzuge GmbH, Germany.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      <Grid container spacing={3} columns={16} sx={{ paddingTop : '30px' ,display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} md={6} lg={6} sx={{border : 'none'}}> 
          <Paper 
              sx={{ 
                padding: '20px', 
                border: 'none', 
                backgroundColor: 'transparent', 
                boxShadow: 'none' ,              
                            
             
              }} 
              elevation={0}
            >
            <Typography variant="body1" sx={{ textAlign: 'left' ,fontSize: '24px' }} className='fontSizetext'>
              Teknix began with a simple concept: to achieve excellence in the vertical transportation industry. 
              Since four decades in the field of installation, modernization, and maintenance of elevators in 
              collaboration with SRH Aufzuge GmbH, Germany. <br/>
              Teknix began with a simple concept: to achieve excellence in the vertical transportation industry. 
              Since four decades in the field of installation, modernization, and maintenance of elevators in 
              collaboration with SRH Aufzuge GmbH, Germany.
            </Typography>
            <br/>
            <Typography variant="body1" sx={{ textAlign: 'left' ,fontSize: '24px' }} className='fontSizetext'>
              Teknix began with a simple concept: to achieve excellence in the vertical transportation industry. 
              Since four decades in the field of installation, elevators in 
              
              Teknix began with a simple 
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{border : 'none'}}> 
          <Paper 
            sx={{ 
              padding: '20px', 
              border: 'none', 
              backgroundColor: 'transparent', // Remove any background color from Paper
              boxShadow: 'none',               // Remove elevation shadow if desired
              transition: 'transform 0.3s ease, border-color 0.3s ease-in-out, box-shadow 0.3s ease', // Smooth transitions
                '&:hover': {
                  // borderColor: '#777764', // Border color on hover (you can change to any attractive color)
                  transform: 'scale(1.05)', // Slight scaling effect on hover
                  // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
                },
            }} 
            elevation={0}
            >
            <img 
            src={img_4} 
            alt="Home page img" 
            style={{ 
              width: '100%',          // Full width of container
              maxHeight: '500px',     // Limits the height
              height: 'auto',         // Maintains aspect ratio
              objectFit: 'cover',     // Ensures it fills the area proportionally
              // borderRadius: '8px'     // Optional: adds rounded corners
              
              }} 
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} columns={16} sx={{ paddingTop : '30px' ,display: 'flex', justifyContent: 'center' ,border: 'none'}}>
        <Grid item xs={12} md ={6} lg = {4}>
          <Paper sx={{
                padding: '20px',
                border: '2px solid transparent', // Initial transparent border
                borderRadius: '10px', // Rounded corners for a softer look
                transition: 'transform 0.3s ease, border-color 0.3s ease-in-out, box-shadow 0.3s ease', // Smooth transitions
                '&:hover': {
                  borderColor: '#777764', // Border color on hover (you can change to any attractive color)
                  transform: 'scale(1.05)', // Slight scaling effect on hover
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
                },
              }}  elevation={0}>
            <Typography variant="h4" sx={{ textAlign: 'center' , color : '#939393'}}><img src={img_1} alt="img 1" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} /></Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>Quality Excellence</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' ,fontSize: '16px', color : '#939393' }}>
              Teknix began with a simple concept: to achieve excellence in the vertical transportation industry. 
              Since four decades in the field of installation, modernization, and maintenance of elevators in 
              collaboration with SRH Aufzuge GmbH, Germany.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md ={6} lg = {4}>
          <Paper sx={{
                padding: '20px',
                border: '2px solid transparent', // Initial transparent border
                borderRadius: '10px', // Rounded corners for a softer look
                transition: 'transform 0.3s ease, border-color 0.3s ease-in-out, box-shadow 0.3s ease', // Smooth transitions
                '&:hover': {
                  borderColor: '#777764', // Border color on hover (you can change to any attractive color)
                  transform: 'scale(1.05)', // Slight scaling effect on hover
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
                },
              }}  elevation={0}>
            <Typography variant="h4" sx={{ textAlign: 'center' }}><img src={img_2} alt="img 1" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} /></Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>Safety & Reliability</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' ,fontSize: '16px' , color : '#939393'}}>
              Teknix began with a simple concept: to achieve excellence in the vertical transportation industry. 
              Since four decades in the field of installation, modernization, and maintenance of elevators in 
              collaboration with SRH Aufzuge GmbH, Germany.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md ={6} lg = {4} >
          <Paper sx={{
              padding: '20px',
              border: '2px solid transparent', // Initial transparent border
              borderRadius: '10px', // Rounded corners for a softer look
              transition: 'transform 0.3s ease, border-color 0.3s ease-in-out, box-shadow 0.3s ease', // Smooth transitions
              '&:hover': {
                borderColor: '#777764', // Border color on hover (you can change to any attractive color)
                transform: 'scale(1.05)', // Slight scaling effect on hover
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
              },
            }}  elevation={0}>
            <Typography variant="h4" sx={{ textAlign: 'center' }}><img src={img_3} alt="img 1" style={{ width: '100px', height: 'auto', marginBottom: '10px' }} /></Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>Innovative Thinking</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' ,fontSize: '16px', color : '#939393' }}>
              Teknix began with a simple concept: to achieve excellence in the vertical transportation industry. 
              Since four decades in the field of installation, modernization, and maintenance of elevators in 
              collaboration with SRH Aufzuge GmbH, Germany.
            </Typography>
          </Paper>
        </Grid>        
      </Grid>
      
    </div>
    {/* <Footer /> */}
  </div>
);

export default Home;
