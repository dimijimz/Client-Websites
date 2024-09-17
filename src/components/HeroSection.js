import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Import the images
import image1 from '../images/breakpoint-desktop.png';
import image2 from '../images/slide2.jpg';
import image3 from '../images/slide3.jpg';

const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  aspect-ratio: 16 / 9;

  @media (min-width: 768px) {
    aspect-ratio: 21 / 9;
  }
`;

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
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0 32px;
`;

const Content = styled.div`
  max-width: 1000px;
  padding: 10%;
  text-align: left;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 700;
  font-family: open-sans, sans-serif;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: 16px;
  font-family: open-sans, sans-serif;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Button = styled.a`
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedContent = styled(Content)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
`;

const AnimatedTitle = styled(HeroTitle)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;
`;

const AnimatedSubtitle = styled(HeroSubtitle)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1s;
`;

const AnimatedButtonContainer = styled(ButtonContainer)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1.5s;
`;

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [image1, image2, image3];

  useEffect(() => {
    setIsVisible(true);
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <HeroContainer>
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
              <PrimaryButton href="Contact">Book Now</PrimaryButton>
              <SecondaryButton href="Gallery">See Our Work</SecondaryButton>
            </AnimatedButtonContainer>
          </AnimatedContent>
        )}
      </ContentWrapper>
    </HeroContainer>
  );
}

export default HeroSection;