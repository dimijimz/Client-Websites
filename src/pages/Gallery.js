import React, { useEffect } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
  h1 { font-family: 'Copperplate Gothic', sans-serif;
    font-size: 3.5rem;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    text-decoration: none;
    text-align: center;
  }
`;

function Gallery() {
  // Dynamically load the Elfsight platform script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script when component unmounts
    };
  }, []);

  return (
    <GalleryContainer>
      <h1>Our Work</h1>
      {/* Add the Instagram feed div here */}
      <div className="elfsight-app-4d4864af-bfdc-4413-acf5-1c1f54e3035e" data-elfsight-app-lazy></div>
    </GalleryContainer>
  );
}

export default Gallery;
