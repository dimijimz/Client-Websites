import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Import the images for the slideshow
import image1 from '../images/breakpoint-desktop.png';
import image2 from '../images/slide2.jpg';
import image3 from '../images/slide3.jpg';

// Main container for the hero section
const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  aspect-ratio: 9 / 16; // More vertical aspect ratio for mobile

  @media (min-width: 768px) {
    aspect-ratio: 21 / 9; // Wider aspect ratio for desktop
  }
`;

// Styled component for each slide image
const SlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${props => (props.active ? 1 : 0)}; // Show active slide, hide others
  transition: opacity 1s ease-in-out;
`;

// Overlay to darken the image and improve text readability
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

// Wrapper for the content (title, subtitle, buttons)
const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 0 32px;
    text-align: left;
  }
`;

// Styles for the content area
const Content = styled.div`
  max-width: 100%;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 800px;
    width: auto;
  }
`;

// Styles for the main title
const HeroTitle = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: open-sans, sans-serif;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 16px;
  }
`;

// Styles for the subtitle
const HeroSubtitle = styled.p`
  color: white;
  font-size: 1rem;
  font-family: open-sans, sans-serif;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 32px;
  }
`;

// Container for the buttons
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    width: auto;
  }
`;

// Base styles for buttons
const Button = styled.a`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 250px;
  align-self: center;
  text-align: center;
  margin: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 12px 24px;
    width: auto;
    margin: 15px;
  }
`;

// Styles for the primary button
const PrimaryButton = styled(Button)`
  background-color: black;
  color: white;
  border: 2px solid white;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

// Styles for the secondary button (identical to primary in this case)
const SecondaryButton = styled(Button)`
  background-color: black;
  color: white;
  border: 2px solid white;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

// Define a fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Apply fade-in animation to content
const AnimatedContent = styled(Content)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
`;

// Apply fade-in animation to title
const AnimatedTitle = styled(HeroTitle)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;
`;

// Apply fade-in animation to subtitle
const AnimatedSubtitle = styled(HeroSubtitle)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1s;
`;

// Apply fade-in animation to button container
const AnimatedButtonContainer = styled(ButtonContainer)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1.5s;
`;

function HeroSection() {
  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to control visibility of content (for animation purposes)
  const [isVisible, setIsVisible] = useState(false);

  // Array of slide images
  const slides = [image1, image2, image3];

  useEffect(() => {
    // Set content to visible when component mounts
    setIsVisible(true);
    
    // Set up interval to change slides every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    // Clear interval when component unmounts
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <HeroContainer>
      {/* Render all slides, but only show the active one */}
      {slides.map((slide, index) => (
        <SlideImage 
          key={index} 
          image={slide} 
          active={index === currentSlide} 
        />
      ))}
      <Overlay />
      <ContentWrapper>
        {isVisible && (
          <AnimatedContent>
            <AnimatedTitle>Perfection is Standard at Paramount Auto Styling</AnimatedTitle>
            <AnimatedSubtitle>Unleash Your Car's Potential: Tints, Wraps, PPF & Detailing</AnimatedSubtitle>
            <AnimatedButtonContainer>
              <PrimaryButton href="contact">Book Now</PrimaryButton>
              <SecondaryButton href="gallery">See Our Work</SecondaryButton>
            </AnimatedButtonContainer>
          </AnimatedContent>
        )}
      </ContentWrapper>
    </HeroContainer>
  );
}

export default HeroSection;