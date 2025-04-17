import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Your One-Stop Educational Supply Shop</h1>
        <p>
          Welcome to EduSity, your premier destination for high-quality educational resources.
          We provide everything from essential stationery to advanced lab equipment, ensuring
          every student and educator has what they need to succeed.
        </p>

        {/* ✅ Show this button only when user is NOT logged in */}
        {!isLoggedIn && (
          <RouterLink to="/login">
            <button className='btn'>
              Let's Get Started <img src={dark_arrow} alt=""/>
            </button>
          </RouterLink>
        )}
      </div>
    </div>
  );
};

export default Hero;
