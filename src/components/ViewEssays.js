// src/components/ViewEssays.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import '../styles/ViewEssays.css';

function ViewEssays({ user }) {
  const [essays, setEssays] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchEssays = async () => {
        const essaysCollection = collection(db, 'users', user.uid, 'essays');
        const essaySnapshot = await getDocs(essaysCollection);
        const essayList = essaySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEssays(essayList);
      };
      fetchEssays();
    }
  }, [user]);

  return (
    <div className="view-essays">
      <h1>Your Essays</h1>
      {essays.length > 0 ? (
        essays.map(essay => (
          <div key={essay.id} className="essay">
            <h2>{essay.topic}</h2>
            <p>{essay.essay}</p>
          </div>
        ))
      ) : (
        <p>No essays found.</p>
      )}
    </div>
  );
}

export default ViewEssays;