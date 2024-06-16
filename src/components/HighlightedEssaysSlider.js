import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import '../styles/HighlightedEssaysSlider.css';

const HighlightedEssays = () => {
  const [essays, setEssays] = useState([]);

  useEffect(() => {
    const fetchEssays = async () => {
      const querySnapshot = await getDocs(collection(db, 'highlighted_essays'));
      const essaysData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEssays(essaysData);
    };

    fetchEssays();
  }, []);

  return (
    <div className="highlighted-essays">
      {essays.map((essay, index) => (
        <div key={index} className="highlighted-essay">
          <h2>{essay.title}</h2>
          <p>{essay.excerpt}</p>
          <button onClick={() => alert(essay.content)}>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default HighlightedEssays;