// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import './Header.css'; // Your custom CSS file
// import logo from "./images/logo_1.png"

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false); // Drawer state for mobile view
  const [scrolling, setScrolling] = useState(false); // State to track scroll position

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true); // Add shadow when scrolled down
    } else {
      setScrolling(false); // Remove shadow when at the top
    }
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle Drawer open/close
  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <header className={`header ${scrolling ? 'scrolled' : ''}`}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Logo or Title */}
          <Typography className="header-title" variant="h5" component="h1" style={{ flexGrow: 1 }}>
            Grant Elevator
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '20px' }}>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
              HOME
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
              ABOUT
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
              CONTACT
            </NavLink>
          </Box>

          {/* Hamburger Menu for Mobile View */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {/* Mobile Drawer for Nav Links */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 250 }}>
          <IconButton
            onClick={() => toggleDrawer(false)}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: 2,
              color: '#777764', // Default color for larger screens
            }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem button component="a" href="/">
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button component="a" href="/about">
              <ListItemText primary="ABOUT" />
            </ListItem>
            <ListItem button component="a" href="/contact">
              <ListItemText primary="CONTACT" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </header>
  );
};

export default Header;
