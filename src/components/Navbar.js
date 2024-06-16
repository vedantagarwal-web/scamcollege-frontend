// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ user, onSignOut }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Scam College</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/generate-essay">Generate Essay</Link></li>
        <li><Link to="/view-essays">View Essays</Link></li>
      </ul>
      <div className="navbar-user">
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={onSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;