import { createGlobalStyle } from 'styled-components';
import CopperplateGothicFont from './fonts/Copperplate-Gothic-Std-30-BC.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Copperplate Gothic';
    src: url(${CopperplateGothicFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body, html {
    margin: 0;
    padding: 0;
    background-color: #1E1E1E;
    color: #f0f0f0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    color: white;
    margin-top: 0;
  }

  a {
    color: black;
    &:hover {
      color: white;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
    @media (max-width: 768px) {
  body {
    font-size: 14px;
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
}

`;



export default GlobalStyles;