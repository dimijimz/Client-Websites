import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Main container for the footer
// Sets background color, text color, padding, and top margin
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
`;

// Wrapper for the footer content
// Uses flexbox to arrange sections side by side
// Sets maximum width and centers the content
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Individual section within the footer
// Uses flex: 1 to ensure equal width for all sections
const FooterSection = styled.div`
  flex: 1;
`;

// Styling for section titles
const FooterTitle = styled.h3`
  margin-bottom: 1rem;
`;

// Styled component for footer links
// Uses React Router's Link component for internal navigation
// Sets link color, removes underline, and adds hover effect
const FooterLink = styled(Link)`
  color: #ddd;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  
  &:hover {
    color: white;
  }
`;

// Footer component
function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Company information section */}
        <FooterSection>
          <FooterTitle>Paramount Auto Styling</FooterTitle>
          <p>Specializing in Window Tints, Wraps, PPF & Detailing</p>
        </FooterSection>
        
        {/* Quick links section */}
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          {/* Use FooterLink component for internal navigation */}
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/gallery">Gallery</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
        
        {/* Contact information section */}
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <p>123 Auto Street, Car City, ST 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@paramountautostyling.com</p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;