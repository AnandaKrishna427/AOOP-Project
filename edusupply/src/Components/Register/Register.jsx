import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setResult('❌ Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult('success');
      } else {
        setResult(`❌ ${data.error || 'Registration failed'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="register-col">
          <h3>Create an Account</h3>
          <p>Sign up to explore courses, track your learning, and more! Customize your learning path and unlock full access.</p>
        </div>
        <div className="register-col">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <label>Confirm Password</label>
            <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required />

            <button type="submit" className="btn dark-btn">Register</button>
          </form>

          {result === 'success' ? (
            <div className="register-message">
              ✅ Registration successful.{' '}
              <span onClick={() => navigate('/login')}>Click here to login</span>
            </div>
          ) : (
            result && <span className="register-error">{result}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

