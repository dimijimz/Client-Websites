import React, { useState } from 'react';
import styled from 'styled-components';

// Main container for the contact page
// Centers content and sets maximum width
const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 0;
  h1 { 
    font-family: 'AntiqueWonders', sans-serif;
    font-size: 3.5rem;
    font-weight: normal;
    color: white;
    text-decoration: none;
    text-align: center;
  }
`;

// Styled form component
// Uses flexbox for vertical layout
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// Styled input component for text and email fields
const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
`;

// Styled textarea component for message field
const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  height: 150px;
`;

// Styled button component for form submission
// Includes hover effect
const Button = styled.button`
  background-color: black;
  font-family: 'AntiqueWonders', sans-serif;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #333;
  }
`;

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handler for input changes
  // Updates formData state when user types in inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;