import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Scam College</h1>
      <p>Scam College is a revolutionary platform designed to help students craft the perfect essays to get into their dream schools. With advanced AI analysis and personalized prompts, we provide the tools you need to succeed in your college applications.</p>
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>Our mission is to democratize access to higher education by providing powerful tools that help students stand out in the competitive college admissions process.</p>
      </div>
      <div className="about-section">
        <h2>How It Works</h2>
        <p>Our platform uses state-of-the-art AI to analyze and improve your essays, providing detailed feedback and personalized prompts tailored to your unique background and experiences.</p>
      </div>
      <div className="about-section">
        <h2>Join Us</h2>
        <p>Join thousands of students who have used Scam College to achieve their college dreams. Sign up today and start crafting the perfect essay for your dream school.</p>
      </div>
    </div>
  );
};

export default About;