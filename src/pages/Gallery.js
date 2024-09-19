import React, { useEffect } from 'react';
import styled from 'styled-components';

// Main container for the gallery page
// Centers content and sets maximum width
const GalleryContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
  h1 { 
    font-family: 'Copperplate Gothic', sans-serif;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    text-decoration: none;
    text-align: center;
  }
`;

function Gallery() {
  // Use useEffect hook to dynamically load the Elfsight platform script
  useEffect(() => {
    // Create a new script element
    const script = document.createElement('script');
    // Set the source of the script to the Elfsight platform
    script.src = 'https://static.elfsight.com/platform/platform.js';
    // Set the script to load asynchronously
    script.async = true;
    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <GalleryContainer>
      <h1>Our Work</h1>
      {/* Elfsight Instagram feed widget */}
      {/* The className is a unique identifier for this specific Elfsight app */}
      {/* data-elfsight-app-lazy attribute enables lazy loading of the widget */}
      <div 
        className="elfsight-app-4d4864af-bfdc-4413-acf5-1c1f54e3035e" 
        data-elfsight-app-lazy
      ></div>
    </GalleryContainer>
  );
}

export default Gallery;