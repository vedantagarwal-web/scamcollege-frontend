import React, { useState } from 'react';
import { generateEssay } from '../api/essayApi';
import '../styles/GenerateEssayShort.css';

const GenerateEssayShort = () => {
  const [background, setBackground] = useState('');
  const [essay, setEssay] = useState('');

  const handleGenerate = async () => {
    const essayText = await generateEssay({ background });
    setEssay(essayText);
  };

  return (
    <div className="generate-essay-short">
      <textarea
        value={background}
        onChange={(e) => setBackground(e.target.value)}
        placeholder="Describe your background..."
      />
      <button onClick={handleGenerate}>Generate</button>
      {essay && <p>{essay}</p>}
    </div>
  );
};

export default GenerateEssayShort;