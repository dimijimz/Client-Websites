// This function is used to report web vitals metrics
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is provided and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Measure and report Core Web Vitals
      
      // Cumulative Layout Shift (CLS)
      getCLS(onPerfEntry);
      
      // First Input Delay (FID)
      getFID(onPerfEntry);
      
      // First Contentful Paint (FCP)
      getFCP(onPerfEntry);
      
      // Largest Contentful Paint (LCP)
      getLCP(onPerfEntry);
      
      // Time to First Byte (TTFB)
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;