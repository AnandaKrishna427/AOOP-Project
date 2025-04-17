import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import homeIcon from '../../assets/home.png'; // <-- Import your icon

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('isLoggedIn', 'true');
        setResult('✅ Logged in successfully!');
        setTimeout(() => {
          navigate('/home');
          window.location.reload();
        }, 1000);
      } else {
        setResult('❌ Invalid email or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setResult('❌ Server error. Please try again.');
    }
  };

  return (
    <div className="login">
      {/* 🏠 Home icon */}
      <img
        src={homeIcon}
        alt="Home"
        className="home-icon"
        onClick={() => navigate('/')}
      />

      <div className="login-wrapper">
        <div className="login-col">
          <h3>Login to your account</h3>
          <p>
            Access your dashboard, track your progress, and stay updated with personalized learning experiences tailored just for you.
          </p>
        </div>
        <div className="login-col">
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn dark-btn">Login</button>
          </form>
          <span>{result}</span>

          <div className="login-links">
            <span onClick={() => navigate('/register')}>Create an account</span>
            <span>|</span>
            <span onClick={() => navigate('/forget-password')}>Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
