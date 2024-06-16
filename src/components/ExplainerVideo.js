import React from 'react';
import { Animate } from 'react-simple-animate';
import '../styles/ExplainerVideo.css';

const ExplainerVideo = () => {
  return (
    <div className="explainer-container">
      <Animate
        play={true} // Toggle this to start the animation
        duration={1}
        start={{ opacity: 0, transform: 'translateY(20px)' }}
        end={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <div className="explainer-content">
          <h2>How It Works</h2>
          <p>Discover the power of AI in crafting your perfect college essay.</p>
          <p>1. Enter your background information.</p>
          <p>2. Receive personalized essay prompts.</p>
          <p>3. Get detailed feedback to improve your essays.</p>
        </div>
      </Animate>
    </div>
  );
};

export default ExplainerVideo;