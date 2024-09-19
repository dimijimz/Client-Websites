import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

// Main container for the home page
const HomeContainer = styled.div`
  text-align: center;
`;

// Define the fadeIn animation
// This is used to animate elements into view
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled component for the services section
// Uses flexbox for layout and includes responsive design
const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding-top: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: ${props => props.delay || '0.5s'};

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 4rem;
  }
`;

// Styled component for the section heading
const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-family: Copperplate Gothic, sans-serif;
  color: white;
  margin-bottom: 2rem;
  width: 100%; // Ensures the heading takes up full width
`;

// Styled component for individual service items
// Includes hover effects and responsive design
const ServiceItem = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 5px;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    width: calc(50% - 2rem);
    max-width: 700px;
  }
`;

// Styled component for Call-to-Action buttons
// Uses React Router's Link component for navigation
const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

function Home() {
  // State to control visibility of services section
  const [isVisible, setIsVisible] = useState(false);

  // Effect to trigger fade-in animation when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <HomeContainer>
      {/* Hero section component */}
      <HeroSection />
      
      {/* Services section with conditional opacity based on isVisible state */}
      <ServicesSection style={{ opacity: isVisible ? 1 : 0 }}>
        <SectionHeading>Our Services</SectionHeading>
        
        {/* Window Tinting service item */}
        <ServiceItem>
          <h3>Window Tinting</h3>
          <p>Enhance privacy and reduce heat</p>
          <CTAButton to="/services#tinting">Learn More</CTAButton>
        </ServiceItem>
        
        {/* Vehicle Wraps service item */}
        <ServiceItem>
          <h3>Vehicle Wraps</h3>
          <p>Transform your car's appearance</p>
          <CTAButton to="/services#wraps">Learn More</CTAButton>
        </ServiceItem>
        
        {/* PPF Wraps service item */}
        <ServiceItem>
          <h3>PPF Wraps</h3>
          <p>Protect your car's finish</p>
          <CTAButton to="/services#ppf">Learn More</CTAButton>
        </ServiceItem>
        
        {/* Detailing service item */}
        <ServiceItem>
          <h3>Detailing</h3>
          <p>Keep your car looking its best</p>
          <CTAButton to="/services#detailing">Learn More</CTAButton>
        </ServiceItem>
      </ServicesSection>
    </HomeContainer>
  );
}

export default Home;