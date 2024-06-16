import React from 'react';
import '../styles/Sliders.css';

export const TestimonialsSlider = () => {
  const testimonials = [
    "Scam College helped me get into my dream school!",
    "The personalized prompts were exactly what I needed.",
    "My essay writing improved dramatically thanks to their feedback.",
  ];

  return (
    <div className="slider testimonials-slider">
      {testimonials.map((testimonial, index) => (
        <div className="slider-item" key={index}>
          <p>{testimonial}</p>
        </div>
      ))}
    </div>
  );
};

export const BlogSlider = () => {
  const blogPosts = [
    { title: "How I Scammed My Way into Harvard", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
    { title: "Top 10 Tips to Cheat Your College Application", excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..." },
    // Add more blog posts here
  ];

  return (
    <div className="slider blog-slider">
      {blogPosts.map((post, index) => (
        <div className="slider-item" key={index}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const EssaysSlider = () => {
  const essays = [
    { title: "A Quantum Leap into the Subatomic Universe", excerpt: "From the grandeur of the cosmos to the minute world of subatomic particles..." },
    { title: "Utilizing Physics Principles to Navigate the Political Landscape", excerpt: "As a physicist-turned-aspiring politician, my journey..." },
    // Add more essays here
  ];

  return (
    <div className="slider essays-slider">
      {essays.map((essay, index) => (
        <div className="slider-item" key={index}>
          <h3>{essay.title}</h3>
          <p>{essay.excerpt}</p>
        </div>
      ))}
    </div>
  );
};