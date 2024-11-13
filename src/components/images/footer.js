// src/components/Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => (
  <Box sx={{ bgcolor: '#ebebde', color: '#777764',padding: '40px 0',  mt: 5 }}>
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        
        {/* About Us Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>About Us</Typography>
          <Typography variant="body2" color="inherit">
            Teknix Elevators is committed to excellence in the vertical transportation industry. We provide quality installation, modernization, and maintenance services in collaboration with SRH Aufzuge GmbH, Germany.
          </Typography>
        </Grid>
        
        {/* Quick Links Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <Box>
            <Link href="/" color="inherit" underline="hover">Home</Link>
          </Box>
          <Box>
            <Link href="/about" color="inherit" underline="hover">About</Link>
          </Box>
          <Box>
            <Link href="/contact" color="inherit" underline="hover">Contact Us</Link>
          </Box>
          
        </Grid>
        
        {/* Social Media Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <Box display="flex" gap={2}>
            <Link href="https://www.facebook.com" color="inherit" target="_blank" rel="noopener">
              <Facebook />
            </Link>
            <Link href="https://www.twitter.com" color="inherit" target="_blank" rel="noopener">
              <Twitter />
            </Link>
            <Link href="https://www.linkedin.com" color="inherit" target="_blank" rel="noopener">
              <LinkedIn />
            </Link>
            <Link href="https://www.instagram.com" color="inherit" target="_blank" rel="noopener">
              <Instagram />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box textAlign="center" pt={5} pb={3}>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Teknix Elevators. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
