import React from 'react';
// Import necessary routing components from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// Import global styles
import GlobalStyles from './GlobalStyles';
// Import components and pages
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Styled component for the main content area
// This sets up a responsive container for the page content
const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

function App() {
  return (
    // Set up the Router component to enable routing in the app
    <Router>
      {/* Apply global styles to the entire app */}
      <GlobalStyles />
      {/* Render the Header component, which will be present on all pages */}
      <Header />
      {/* Main content area */}
      <MainContent>
        {/* Set up routes for different pages */}
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />
          {/* Services page route */}
          <Route path="/services" element={<Services />} />
          {/* Gallery page route */}
          <Route path="/gallery" element={<Gallery />} />
          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
    </Router>
  );
}

export default App;