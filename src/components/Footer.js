import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// Main container for the footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
`;

// Wrapper for the footer content, uses flexbox for layout
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between; // Pushes content to the edges
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Base styles for footer sections
const FooterSection = styled.div`
  flex: 1;
`;

// Company section takes up more space
const CompanySection = styled(FooterSection)`
  flex: 2;
`;

// Contact section aligned to the right
const ContactSection = styled(FooterSection)`
  text-align: right;
`;

// Styling for section titles
const FooterTitle = styled.h3`
  margin-bottom: 1rem;
`;

// Container for social media icons
const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

// Styling for individual social icons
const SocialIcon = styled.a`
  color: #ddd;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

// Styling for contact items with icons
const ContactItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0.5rem;

  svg {
    margin-left: 0.5rem;
  }
`;

// Copyright section at the bottom
const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #444;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Company information and social links */}
        <CompanySection>
          <FooterTitle>Paramount Auto Styling</FooterTitle>
          <p>Specializing in Window Tints, Wraps, PPF & Detailing</p>
          <SocialIcons>
            <SocialIcon href="https://www.instagram.com/paramountautostyling" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://www.tiktok.com/@paramount.auto.st" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </SocialIcon>
          </SocialIcons>
        </CompanySection>
        
        {/* Contact information with icons */}
        <ContactSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactItem>
            25 Miller Rd, Mahopac, NY 10541
            <FaMapMarkerAlt />
          </ContactItem>
          <ContactItem>
            845-674-9777
            <FaPhone />
          </ContactItem>
        </ContactSection>
      </FooterContent>
      
      {/* Copyright notice */}
      <Copyright>
        © {new Date().getFullYear()} DimiJimz Web Development. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;