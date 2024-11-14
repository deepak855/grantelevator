// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import './Header.css'; // Your custom CSS file
import logo from "./images/logo_1.png"
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false); // Drawer state for mobile view

  // Toggle Drawer open/close
  const toggleDrawer = (open) => {
    setOpenDrawer(open);
  };

  return (
    <header className="header">
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center" >
          {/* Logo or Title */}
          <Typography className="header-title">
            <img src={logo} alt='img' style={{ width: '200px', height: '100px' }}/>
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
            sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 ,color: '#777764'  // Default color for larger screens
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
