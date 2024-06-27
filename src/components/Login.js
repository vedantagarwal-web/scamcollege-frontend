import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '../firebaseConfig';
import '../styles/Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ParticleBackground from './ParticleBackground';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('setUser prop:', setUser);
  }, [setUser]);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <ParticleBackground />
      <div className="login">
        <h1>Login</h1>
        <p className="welcome-text">Log in to access your personalized essay writing tools and start crafting outstanding essays today.</p>
        <form onSubmit={handleEmailSignIn}>
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
          <button type="submit"><i className="fas fa-sign-in-alt"></i> Login</button>
          {error && <p className="error">{error}</p>}
        </form>
        <button onClick={handleGoogleSignIn} className="google-signin"><i className="fab fa-google"></i> Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;