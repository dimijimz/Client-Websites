// Import React library
import React from 'react';

// Import routing components from react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import styled-components for CSS-in-JS styling
import styled from 'styled-components';

// Import global styles
import GlobalStyles from './GlobalStyles';

// Import ScrollToTop component
import ScrollToTop from './components/ScrollToTop';

// Import components and pages
import Header from './components/Header';
import Footer from './components/Footer';
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

// Main App component
function App() {
  return (
    // Set up the Router component to enable routing in the app
    <Router>
      {/* Apply ScrollToTop component to the entire app */}
      <ScrollToTop />
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

          {/* TODO: Add a 404 Not Found route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
}

// Export the App component as the default export
export default App;