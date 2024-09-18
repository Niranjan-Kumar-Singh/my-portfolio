import React from "react";
import "./AboutMe.css"; // Ensure CSS file exists in the same directory
import myPhoto from "../images/myPhoto.jpg"; // Path to images folder

const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-container">
        <img src={myPhoto} alt="Niranjan Kumar Singh" className="my-photo" />
        <div className="about-details">
          <h1>About Me</h1>
          <h2>
            Hi, I'm <span className="highlight">Niranjan Kumar Singh</span>,
          </h2>
          <div className="animated-text">
            <h3>
              <span className="typing-animation">a Web Developer</span>
            </h3>
          </div>
          <p>
            With experience in React, JavaScript, and CSS, I enjoy turning ideas
            into reality and solving problems through code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
