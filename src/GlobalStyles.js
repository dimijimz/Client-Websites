import { createGlobalStyle } from 'styled-components';
// Import custom font file
import CopperplateGothicFont from './fonts/Copperplate-Gothic-Std-30-BC.ttf';
import AntiqueWondersFont from './fonts/AntiqueWondersFree.woff';

// Create global styles using styled-components
const GlobalStyles = createGlobalStyle`
  // Define custom font face for Copperplate Gothic
  @font-face {
    font-family: 'Copperplate Gothic';
    src: url(${CopperplateGothicFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  // Define custom font face for AntiqueWonders
  @font-face {
    font-family: 'AntiqueWonders';
    src: url(${AntiqueWondersFont}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  // Reset default styles and set global styles for body and html
  body, html {
    margin: 0;
    padding: 0;
    background-color: #1E1E1E; // Dark background
    color: #f0f0f0; // Light text color
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
  }

  // Ensure the root element takes up full viewport height
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  // Apply border-box sizing to all elements
  *, *:before, *:after {
    box-sizing: inherit;
  }

  // Set default styles for headings
  h1, h2, h3, h4, h5, h6 {
    color: white;
    margin-top: 0;
  }

  // Set default styles for links
  a {
    color: black;
    &:hover {
      color: white;
    }
  }

  // Ensure images are responsive
  img {
    max-width: 100%;
    height: auto;
  }

  // Set font for code elements
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  // Media query for mobile devices
  @media (max-width: 768px) {
    body {
      font-size: 14px;
      padding-top: env(safe-area-inset-top); // Safe area padding only for mobile
      padding-bottom: env(safe-area-inset-bottom);
    }

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }

    header {
      background-color: #1E1E1E;
      padding-top: env(safe-area-inset-top); // Ensure the header respects the notch
    }
  }
`;

export default GlobalStyles;