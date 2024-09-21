// Import necessary dependencies from React and other libraries
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Style the main header container
// Sets padding, position, bottom border, and z-index to ensure it stays on top
const HeaderContainer = styled.header`
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1E1E1E;
  border-bottom: 1px solid #333;
  z-index: 1000;
`;

const MainContentPadding = styled.div`
  padding-top: 68px; // Default padding for mobile

  @media (min-width: 768px) {
    padding-top: 105px; // Padding for desktop
  }
`;

// Style the navigation container
// Uses flexbox for layout, sets max width and centers content
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  // On mobile, align logo and menu icon horizontally
  flex-direction: row;
  @media (min-width: 768px) {
    // On desktop, keep the horizontal alignment
    flex-direction: row;
  }
`;

// Style the logo
// Uses React Router's Link component for navigation
// Sets font, size, and hover effect
const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: 'Copperplate Gothic', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  &:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    text-decoration: none;
  }
`;

// Style the menu icon (hamburger menu for mobile)
// Hides on desktop
const MenuIcon = styled.div`
  display: block;
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    display: none; // Hide on desktop
  }
`;

// Style the navigation links container
// Shows/hides based on menu state
// Changes layout for desktop view
const NavLinks = styled.ul`
  display: ${props => props.isOpen ? 'flex' : 'none'}; // Show/hide based on menu state
  flex-direction: column;
  position: absolute;
  top: 80%;
  left: 0;
  right: 0;
  background-color: #1E1E1E;
  padding: 1rem;
  z-index: 1000;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static; // Reset position for desktop
    background-color: transparent;
    padding: 0;
  }
`;

// Style individual navigation items
const NavItem = styled.li`
  list-style-type: none;  
  margin: 0.5rem 0;
  
  @media (min-width: 768px) {
    margin: 0 0 0 1rem; // Add left margin on desktop
  }
`;

// Style the navigation links
// Uses React Router's Link component
// Sets font, size, and hover effect
const StyledLink = styled(Link)`
  color: white;
  padding: 10px;
  font-family: 'Copperplate Gothic', sans-serif;
  font-size: 1.2rem;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    padding: 20px;
  }

  &:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    text-decoration: none;
  }
`;

// Header component function
function Header() {
  // State to manage menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Ref for the menu to detect outside clicks
  const menuRef = useRef(null);
   
  // Effect to handle clicking outside the menu to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  
  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Nav>
          <Logo to="/" onClick={closeMenu}>Paramount Auto Styling</Logo>
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon onClick={closeMenu}>×</CloseIcon>
            ) : (
              '☰'
            )}
          </MenuIcon>
          <NavLinks isOpen={isMenuOpen} ref={menuRef}>
            <NavItem><StyledLink to="/services" onClick={closeMenu}>Services</StyledLink></NavItem>
            <NavItem><StyledLink to="/gallery" onClick={closeMenu}>Gallery</StyledLink></NavItem>
            <NavItem><StyledLink to="/contact" onClick={closeMenu}>Contact</StyledLink></NavItem>
          </NavLinks>
        </Nav>
      </HeaderContainer>
      <MainContentPadding />
    </>
  );
}
// Style the close icon
const CloseIcon = styled.span`
  cursor: pointer;
`;

export default Header;