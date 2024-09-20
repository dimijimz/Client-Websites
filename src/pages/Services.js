import React from 'react';
import styled from 'styled-components';

// Import images for each service
import windowTintingImage from '../images/cartint.jpg';
import vehicleWrapsImage from '../images/carwrap.jpg';
import ppfImage from '../images/carppf.jpg';
import detailingImage from '../images/cardetail.jpg';

// Main container for the services page
// Centers content and sets maximum width
const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

// Styled component for the main "Our Services" heading
const ServicesTitle = styled.h1`
  font-family: 'Copperplate Gothic', sans-serif;
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
`;

// Container for each individual service
// Uses flexbox for layout and adjusts for mobile/desktop
const ServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 4rem;
  }
`;

// Container for the text content of each service
// Includes subtle background and hover effect
const ServiceContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05); // Subtle light background
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); // Slightly lighter on hover
  }

  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;

// Styled component for service titles
const ServiceTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

// Styled component for service descriptions
const ServiceDescription = styled.p`
  color: #f0f0f0;
  font-size: 0.9rem;
  line-height: 1.6;
`;

// Styled component for service images
// Adjusts size for mobile/desktop
const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 300px;
    height: 200px;
  }
`;

function Services() {
  // Array of service objects containing title, description, and image for each service
  const services = [
    {
      title: "Window Tinting",
      description: "Our premium window tinting service reduces heat, blocks harmful UV rays, and enhances your vehicle's privacy and appearance. We use top-quality films that won't fade or bubble over time.",
      image: windowTintingImage
    },
    {
      title: "Vehicle Wraps",
      description: "Transform your vehicle with our custom wrap services. Whether you want a color change, a unique design, or commercial branding, our expert team can bring your vision to life with precision and care.",
      image: vehicleWrapsImage
    },
    {
      title: "Paint Protection Film (PPF)",
      description: "Protect your vehicle's paint from chips, scratches, and environmental damage with our high-quality PPF. This virtually invisible film maintains your car's pristine appearance for years to come.",
      image: ppfImage
    },
    {
      title: "Detailing",
      description: "Our comprehensive detailing services will make your vehicle look and feel brand new. From exterior polishing to interior deep cleaning, we pay attention to every detail to ensure your car looks its absolute best.",
      image: detailingImage
    }
  ];

  return (
    <ServicesContainer>
      <ServicesTitle>Our Services</ServicesTitle>
      {/* Map through the services array to render each service section */}
      {services.map((service, index) => (
        <ServiceSection key={index}>
          <ServiceContent>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceContent>
          <ServiceImage src={service.image} alt={service.title} />
        </ServiceSection>
      ))}
    </ServicesContainer>
  );
}

export default Services;