import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-main">
      <section className="mission-section">
        <h1>About Scam College</h1>
        <p>Scam College is a revolutionary platform designed to help students craft the perfect essays to get into their dream schools. With advanced AI analysis and personalized prompts, we provide the tools you need to succeed in your college applications.</p>
      </section>
      <section className="details-section">
        <div className="detail-card">
          <h2>Our Mission</h2>
          <p>Our mission is to democratize access to higher education by providing powerful tools that help students stand out in the competitive college admissions process.</p>
        </div>
        <div className="detail-card">
          <h2>How It Works</h2>
          <p>Our platform uses state-of-the-art AI to analyze and improve your essays, providing detailed feedback and personalized prompts tailored to your unique background and experiences.</p>
        </div>
        <div className="detail-card">
          <h2>Join Us</h2>
          <p>Join thousands of students who have used Scam College to achieve their college dreams. Sign up today and start crafting the perfect essay for your dream school.</p>
        </div>
      </section>
      <section className="additional-info">
        <h2>Why Choose Us?</h2>
        <p>At Scam College, we believe that every student deserves a chance to shine. Our AI-driven platform offers unique insights and personalized feedback that traditional methods can't match. We are dedicated to helping you present the best version of yourself to college admissions committees.</p>
        <h2>Our Technology</h2>
        <p>We use cutting-edge machine learning algorithms to analyze thousands of essays and provide you with the most relevant prompts and feedback. Our technology ensures that your essays are not only grammatically correct but also compelling and unique.</p>
      </section>
    </div>
  );
};

export default About;