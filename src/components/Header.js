import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 1rem 0;
  border-bottom: 1px solid #333;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: 'Copperplate Gothic', sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 0;
  }

  &:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    text-decoration: none;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    margin: 0 0 0 1rem;
  }
`;

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

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Paramount Auto Styling</Logo>
        <NavLinks>
          <NavItem><StyledLink to="/services">Services</StyledLink></NavItem>
          <NavItem><StyledLink to="/gallery">Gallery</StyledLink></NavItem>
          <NavItem><StyledLink to="/contact">Contact</StyledLink></NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;