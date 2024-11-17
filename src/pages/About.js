import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import img_4 from "../components/images/photo-16.jpg";

const images = [
  img_4,
  img_4,
  img_4,
  img_4
];

const About = () => (
  <>
    {/* Grid for About Content */}
    <Grid container spacing={3} columns = {12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item md={8} xs={12} sm={12} >
        <Paper sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>
          <Typography className='GrantTitle'>ABOUT GRANTELEVATORS</Typography>
          <Typography className='Grant_about_body'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </Typography>
        </Paper>
      </Grid>
    </Grid>

    {/* Grid for Images */}
    <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item md={8} xs={12} sm={12}>
        <Paper sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>
          <Box sx={{ overflowX: 'auto', display: 'flex', justifyContent: 'center', padding: '5px' }}>
            <Grid container spacing={2} direction="row" wrap="nowrap" sx={{ width: '100%' }}>
              {images.map((src, index) => (
                <Grid item key={index} xs={6} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box
                    component="img"
                    src={src}
                    alt={`Image ${index + 1}`}
                    sx={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: 'none',
                      objectFit: 'contain',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>

    {/* Grid for Why Grant Elevators */}
    <Grid container spacing={3} columns = {12} sx={{ paddingTop: '30px', display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>
          <Typography className='GrantTitleAbout'>WHY GRANT ELEVATORS</Typography> <br/><br/>
          <Typography className='Grant_about_body' sx={{ lineHeight: '1.8', color: '#666' }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. With these adjustments, the layout should adjust
             dynamically between mobile and desktop views.
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>
          <img
            src={img_4}
            alt="Home page img"
            style={{
              width: '100%',
              maxHeight: '400px',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: 'none',
            }}
          />
        </Paper>
      </Grid>
    </Grid>

    {/* Grid for Technical Capacity */}
    <Grid container spacing={3} sx={{ paddingTop: '30px', display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>
          <img
            src={img_4}
            alt="Technical Capacity img"
            style={{
              width: '100%',
              maxHeight: '400px',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: 'none',
            }}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: '20px', backgroundColor: 'transparent', boxShadow: 'none' }} elevation={0}>
          <Typography className='GrantTitleAbout'>TECHNICAL CAPACITY</Typography><br/><br/>
          <Typography className='Grant_about_body' sx={{ lineHeight: '1.8', color: '#666' }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. With these adjustments, the layout should adjust dynamically
             between mobile and desktop views.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </>
);

export default About;
