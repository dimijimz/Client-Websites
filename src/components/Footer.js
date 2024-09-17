import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterSection = styled.div`
  flex: 1;
`;

const FooterTitle = styled.h3`
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #ddd;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  
  &:hover {
    color: white;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Paramount Auto Styling</FooterTitle>
          <p>Specializing in Window Tints, Wraps, PPF & Detailing</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/gallery">Gallery</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>
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