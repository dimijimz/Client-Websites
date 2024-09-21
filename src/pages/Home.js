import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

// Import images for each service
import windowTintingImage from '../images/cartint.jpg';
import vehicleWrapsImage from '../images/carwrap.jpg';
import ppfImage from '../images/carppf.jpg';
import detailingImage from '../images/cardetail.jpg';

// Main container for the home page
const HomeContainer = styled.div`
  text-align: center;
`;

// Define the fadeIn animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled component for the services section
const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  padding: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: ${props => props.delay || '0.5s'};
`;

// Styled component for the section heading
const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-family: Copperplate Gothic, sans-serif;
  color: white;
  margin-bottom: 2rem;
  width: 100%;
`;

// Grid container for service cards
const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

// Styled component for individual service cards
const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

// Styled component for service images
const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

// Container for service content
const ServiceContent = styled.div`
  padding: 1.5rem;
`;

// Styled component for service titles
const ServiceTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

// Styled component for service descriptions
const ServiceDescription = styled.p`
  color: #f0f0f0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

// Styled component for Call-to-Action buttons
const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Window Tinting",
      description: "Enhance privacy and reduce heat",
      image: windowTintingImage,
      link: "/services#tinting"
    },
    {
      title: "Vehicle Wraps",
      description: "Transform your car's appearance",
      image: vehicleWrapsImage,
      link: "/services#wraps"
    },
    {
      title: "PPF Wraps",
      description: "Protect your car's finish",
      image: ppfImage,
      link: "/services#ppf"
    },
    {
      title: "Detailing",
      description: "Keep your car looking its best",
      image: detailingImage,
      link: "/services#detailing"
    }
  ];

  return (
    <HomeContainer>
      <HeroSection />
      
      <ServicesSection style={{ opacity: isVisible ? 1 : 0 }}>
        <SectionHeading>Our Services</SectionHeading>
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceImage src={service.image} alt={service.title} />
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <CTAButton to={service.link}>Learn More</CTAButton>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ServicesSection>
    </HomeContainer>
  );
}

export default Home;