// src/components/About.js
import React from 'react';
import '../styles/About.css';
import { FaBullseye, FaCogs, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about">
      <section className="hero">
        <h1 className="animated fade-in">About Scam College</h1>
        <p className="animated fade-in">Scam College is a revolutionary platform designed to help students craft the perfect essays to get into their dream schools.</p>
      </section>
      <section className="mission animated slide-in">
        <h2>Our Mission <FaBullseye /></h2>
        <p>Our mission is to democratize access to higher education by providing powerful tools that help students stand out in the competitive college admissions process.</p>
      </section>
      <section className="how-it-works animated slide-in">
        <h2>How It Works <FaCogs /></h2>
        <p>Our platform uses state-of-the-art AI to analyze and improve your essays, providing detailed feedback and personalized prompts tailored to your unique background and experiences.</p>
      </section>
      <section className="join-us animated slide-in">
        <h2>Join Us <FaUsers /></h2>
        <p>Join thousands of students who have used Scam College to achieve their college dreams. Sign up today and start crafting the perfect essay for your dream school.</p>
      </section>
    </div>
  );
};

export default About;