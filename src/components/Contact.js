import React from 'react';
import './Contact.css'; // Ensure CSS file exists

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <p>Email: <a href="mailto:niranjansingh1419@gmail.com">niranjansingh1419@gmail.com</a></p>
      <div className="social-links">
        <a href="https://github.com/Niranjan-Kumar-Singh" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/niranjan-kumar-singh/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
