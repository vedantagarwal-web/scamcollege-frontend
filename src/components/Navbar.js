import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import '../styles/Navbar.css';
import logo from '../assets/Black Beige Bold Framed Typography Planet Brand Business Logo.png'; // Adjust the path

const Navbar = ({ user, setUser }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Scam College Logo" className="navbar-logo" />
        </Link>
      </div>
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
            <button onClick={handleSignOut}>Sign Out</button>
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