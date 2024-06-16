// Home.js
import React from 'react';
// import BlogSlider from './BlogSlider';
// import TestimonialsSlider from './TestimonialsSlider';
// import HighlightedEssaysSlider from './HighlightedEssaysSlider';
import '../styles/Home.css';


const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <h1>Unlock Your College Dreams with ScamCollege.com</h1>
        <p>Craft the perfect essays to get into your dream school.</p>
        <button>Get Started</button>
      </section>

      <div className="sections-container">
        <section className="section ai-analysis">
          <h2>AI Essay Analysis</h2>
          <p>Our advanced AI analyzes your essays for structure, content, and creativity, providing feedback to enhance your writing.</p>
        </section>

        <section className="section personalized-prompts">
          <h2>Personalized Prompts</h2>
          <p>Receive unique essay prompts tailored to your background and experiences.</p>
        </section>

        <section className="section section-full essay-improvement">
          <h2>Essay Improvement</h2>
          <p>Get detailed suggestions to improve your essays, ensuring the best possible version.</p>
        </section>

        <section className="section section-full how-it-works">
          <h2>How It Works</h2>
          <p>Discover the power of AI in crafting your perfect college essay.</p>
          <ol>
            <li>Enter your background information.</li>
            <li>Receive personalized essay prompts.</li>
            <li>Get detailed feedback to improve your essays.</li>
          </ol>
        </section>

        {/* <section className="section section-full testimonials">
          <TestimonialsSlider />
        </section>

        <section className="section section-full blog-posts">
          <BlogSlider />
        </section>

        <section className="section section-full highlighted-essays">
          <HighlightedEssaysSlider />
        </section> */}
      </div>
    </div>
  );
};

export default Home;
