// src/components/EssayDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig'; // Ensure you have Firebase configured

const EssayDetail = () => {
  const { id } = useParams();
  const [essay, setEssay] = useState(null);

  useEffect(() => {
    const fetchEssay = async () => {
      const essayDoc = await db.collection('highlightedEssays').doc(id).get();
      if (essayDoc.exists) {
        setEssay(essayDoc.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchEssay();
  }, [id]);

  if (!essay) {
    return <div>Loading...</div>;
  }

  return (
    <div className="essay-detail">
      <h1>{essay.title}</h1>
      <p>{essay.fullContent}</p>
    </div>
  );
};

export default EssayDetail;