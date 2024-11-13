// src/pages/Contact.js
import React from 'react';
import { Typography, Box, Container, Paper, Grid, IconButton } from '@mui/material';
import { Phone, Email, WhatsApp } from '@mui/icons-material';  // Importing icons from MUI
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: '1.5rem',
  },
  contactDetail: {
    marginBottom: theme.spacing(2),
    fontSize: '1rem',
    color: '#555',
    lineHeight: 1.6,
  },
  contactBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(3),
  },
  contactLabel: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  contactContent: {
    fontSize: '1rem',
    color: '#333',
  },
  iconStyle: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  contactIcon: {
    marginRight: theme.spacing(2),
    fontSize: '1.5rem',
    color: theme.palette.primary.main,
  },
  linkText: {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" sx={{ paddingY: 6 }}>
      <Box className={classes.header}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" color="textSecondary">
          We would love to hear from you! Reach out to us using the information below.
        </Typography>
      </Box>

      {/* Address Section */}
      <Paper className={classes.paperContainer}>
        <Typography variant="h6" className={classes.sectionTitle}>Bengaluru</Typography>
        <Typography variant="body1" className={classes.contactDetail}>
          <strong>Grant Elevator</strong><br />
          4th Floor, 326/1/228/11/1, A.M. Plaza, Chikkagulappa Layout, Hennur Baglur Main Road, 
          Hennur Bande, Kalyan Nagar Post, Bengaluru (Bangalore) Urban, Karnataka, 560043
        </Typography>
      </Paper>

      {/* Email Section */}
      <Paper className={classes.paperContainer}>
        <Typography variant="h6" className={classes.sectionTitle}>Email:</Typography>
        <Typography variant="body1" className={classes.contactDetail}>
          <a href="mailto:info@grantelevator.com" className={classes.linkText}>
            info@grantelevator.com
          </a><br />
          <a href="mailto:info.grantelevator@gmail.com" className={classes.linkText}>
            info.grantelevator@gmail.com
          </a>
        </Typography>
      </Paper>

      {/* Phone Number Section */}
      <Paper className={classes.paperContainer}>
        <Typography variant="h6" className={classes.sectionTitle}>Phone Number:</Typography>
        <Typography variant="body1" className={classes.contactDetail}>
          <a href="tel:+919741247493" className={classes.linkText}>
            <Phone className={classes.contactIcon} /> +91 9741247493
          </a>
        </Typography>
      </Paper>

      {/* Whatsapp Section */}
      <Paper className={classes.paperContainer}>
        <Typography variant="h6" className={classes.sectionTitle}>Whatsapp:</Typography>
        <Typography variant="body1" className={classes.contactDetail}>
          <a href="https://wa.me/919741247493" className={classes.linkText}>
            <WhatsApp className={classes.contactIcon} /> +91 9741247493
          </a>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Contact;
