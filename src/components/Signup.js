import React, { useState, useEffect } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '../firebaseConfig';
import '../styles/Signup.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ParticleBackground from './ParticleBackground';

function Signup({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('setUser prop:', setUser);
  }, [setUser]);

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <ParticleBackground />
      <div className="signup">
        <h1>Signup</h1>
        <p className="welcome-text">Sign up to unlock access to our advanced essay writing tools and resources designed to help you succeed.</p>
        <form onSubmit={handleEmailSignup}>
          <div className="input-container">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit"><i className="fas fa-user-plus"></i> Signup</button>
          {error && <p className="error">{error}</p>}
        </form>
        <button onClick={handleGoogleSignup} className="google-signin"><i className="fab fa-google"></i> Sign up with Google</button>
      </div>
    </div>
  );
}

export default Signup;