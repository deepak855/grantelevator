// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';  // Import ThemeProvider
import Header from './components/Header';
// import Footer from './components/Footer';  // Import Footer
import Footer from './components/images/footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from "./pages/Products"
import theme from './theme';  // Import custom theme
import "./App.css";

const App = () => (
  <ThemeProvider theme={theme}>  {/* Wrap your app with ThemeProvider */}
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />  {/* Add Footer here to make it appear on all pages */}
    </Router>
  </ThemeProvider>
);

export default App;
