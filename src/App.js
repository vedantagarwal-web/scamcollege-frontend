// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import GenerateEssay from './components/GenerateEssay';
import ViewEssays from './components/ViewEssays';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost'; // Import the BlogPost component
import About from './components/About';
import Footer from './components/Footer';
import { auth } from './firebaseConfig';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    auth.signOut().then(() => setUser(null));
  };

  return (
    <Router>
      <Navbar user={user} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/generate-essay" element={<GenerateEssay user={user} />} />
        <Route path="/view-essays" element={<ViewEssays user={user} />} />
        <Route path="/blog" element={<Blog />} /> {/* Route for Blog List */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Route for individual Blog Post */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;