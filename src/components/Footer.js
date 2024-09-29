import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// Container for the whole footer section
const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
`;

// Main wrapper for everything in the footer, keeps things neat with flexbox
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Basic setup for the sections inside the footer
const FooterSection = styled.div`
  flex: 1;
`;

// Giving the company info section more room
const CompanySection = styled(FooterSection)`
  flex: 2;
`;

// Right-aligning the contact section
const ContactSection = styled(FooterSection)`
  text-align: right;
`;

// Style for the titles in the footer sections
const FooterTitle = styled.h3`
  margin-bottom: 1rem;
`;

// Social icons area
const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

// Individual styles for each social media icon
const SocialIcon = styled.a`
  color: #ddd;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

// Contact info with icons next to it
const ContactItem = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0.5rem;

  svg {
    margin-left: 0.5rem;
  }
`;

// Style for the copyright notice at the bottom
const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #444;

  .number { 
    font-family: 'Open Sans', sans-serif;
  }
`;
function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Section for company info and links to social media */}
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
        
        {/* Section for contact info with icons */}
        <ContactSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactItem>
            <span className="number">25</span>&nbsp;Miller Rd, Mahopac, NY&nbsp;<span className="number">10541</span>
            <FaMapMarkerAlt />
          </ContactItem>
          <ContactItem>
            <span className="number">845-674-9777</span>&nbsp;
            <FaPhone />
          </ContactItem>
        </ContactSection>
      </FooterContent>
      
      {/* Copyright notice at the bottom */}
      <Copyright>
        © <span className="number">{new Date().getFullYear()}</span> DimiJimz Web Development. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;