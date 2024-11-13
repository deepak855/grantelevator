// // src/pages/About.js
// import React from 'react';
// import { Typography, Box, Container } from '@mui/material';

// const About = () => (
//   <Container maxWidth="md" sx={{ paddingY: 4 }}> {/* MUI Container added */}
//     <Box textAlign="center" sx={{ paddingTop: '30px' }}>
//       <Typography variant="h4" gutterBottom> {/* `gutterBottom` for spacing */}
//         About Us
//       </Typography>
//       <Typography variant="body1" mt={2}>
//         This is the About page content for Teknix Elevators. We are dedicated to providing quality, safety, and innovation in the vertical transportation industry. With over four decades of experience in installation, modernization, and maintenance of elevators in collaboration with SRH Aufzuge GmbH, Germany, we aim to deliver excellence.
//       </Typography>
//     </Box>
//   </Container>
// );

// export default About;
// src/pages/About.js
// src/pages/About.js
import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import about_img from "../components/images/about_img.mp4"
const About = () => (
  <>
    {/* Full-Screen Video Section */}
    <Box
      sx={{
        width: '100%',
        height: '100vh', // Full viewport height
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <video
        autoPlay
        loop
        muted
        controls
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          border: 'none'
        }}
      >
        <source src="/path/to/your/local/video.mp4" type="video/mp4" /> {/* Replace with your local video path */}
        Your browser does not support the video tag.
      </video>
      
      {/* Text "About Us" on top left of the video */}
      <Typography
        variant="h4"
        sx={{
          position: 'absolute',
          top: '70px', // 20px from the top of the video
          left: '20px', // 20px from the left of the video
          color: 'white', // Text color
          fontWeight: 'bold', // Make it bold
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: dark background to make text readable
          padding: '10px', // Padding around the text
          borderRadius: '5px' // Rounded corners for the background
        }}
      >
        About us
      </Typography>
    </Box>

    {/* About Content Section */}
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Box textAlign="center" >
       
        <Typography variant="body1" mt={2}>
          This is the About page content for Teknix Elevators. We are dedicated to providing quality, safety, and innovation in the vertical transportation industry. With over four decades of experience in installation, modernization, and maintenance of elevators in collaboration with SRH Aufzuge GmbH, Germany, we aim to deliver excellence.
        </Typography>
      </Box>
    </Container>
  </>
);

export default About;
