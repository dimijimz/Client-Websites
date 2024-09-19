// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import global styles
import './GlobalStyles';

// Import the main App component
import App from './App';

// Import the reportWebVitals function for performance measurement
import reportWebVitals from './reportWebVitals';

// Create a root for React 18's concurrent mode
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();