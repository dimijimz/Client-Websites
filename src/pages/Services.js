import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Define the fade-in animation
// This animation will be used to smoothly reveal each service section
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Main container for the services page
// Centers content and sets maximum width
const ServicesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  // Styles for the main heading
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

// Styled component for each service section
// Includes fade-in animation
const ServiceSection = styled.section`
  margin-bottom: 3rem;
  opacity: 0; // Start hidden
  animation: ${fadeIn} 1s ease-out forwards; // Fade-in animation
  animation-delay: ${props => props.delay || '0.5s'}; // Allows for staggered animations
`;

// Styled component for service titles
const ServiceTitle = styled.h2`
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
`;

// Styled component for service descriptions
const ServiceDescription = styled.p`
  line-height: 1.6;
`;

function Services() {
  // State to control visibility of service sections
  const [isVisible, setIsVisible] = useState(false);

  // Effect to trigger fade-in animation when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <ServicesContainer>
      <h1>Our Services</h1>
      
      {/* Window Tinting Service Section */}
      {/* Pass isVisible to control opacity and animation */}
      <ServiceSection id="tinting" style={{ opacity: isVisible ? 1 : 0 }}>
        <ServiceTitle>Window Tinting</ServiceTitle>
        <ServiceDescription>
          Our premium window tinting service reduces heat, blocks harmful UV rays, and enhances your vehicle's privacy and appearance. We use top-quality films that won't fade or bubble over time.
        </ServiceDescription>
      </ServiceSection>
      
      {/* Vehicle Wraps Service Section */}
      <ServiceSection id="wraps" style={{ opacity: isVisible ? 1 : 0 }}>
        <ServiceTitle>Vehicle Wraps</ServiceTitle>
        <ServiceDescription>
          Transform your vehicle with our custom wrap services. Whether you want a color change, a unique design, or commercial branding, our expert team can bring your vision to life with precision and care.
        </ServiceDescription>
      </ServiceSection>
      
      {/* Paint Protection Film (PPF) Service Section */}
      <ServiceSection id="ppf" style={{ opacity: isVisible ? 1 : 0 }}>
        <ServiceTitle>Paint Protection Film (PPF)</ServiceTitle>
        <ServiceDescription>
          Protect your vehicle's paint from chips, scratches, and environmental damage with our high-quality PPF. This virtually invisible film maintains your car's pristine appearance for years to come.
        </ServiceDescription>
      </ServiceSection>
      
      {/* Detailing Service Section */}
      <ServiceSection id="detailing" style={{ opacity: isVisible ? 1 : 0 }}>
        <ServiceTitle>Detailing</ServiceTitle>
        <ServiceDescription>
          Our comprehensive detailing services will make your vehicle look and feel brand new. From exterior polishing to interior deep cleaning, we pay attention to every detail to ensure your car looks its absolute best.
        </ServiceDescription>
      </ServiceSection>
    </ServicesContainer>
  );
}

export default Services;