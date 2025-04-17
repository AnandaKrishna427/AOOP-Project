import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'; // Assuming you still want Navbar
import App from '../../App.jsx';
const Home = () => {
    return (
        <div>
            <Navbar />
            <App/>
            <div className="home-content">
                <section className="hero-section">
                    <h1>Welcome to Edusity</h1>
                    <p>Your learning journey starts here 🚀</p>
                </section>

                <section className="about-section">
                    <h2>About Us</h2>
                    <p>We are committed to delivering quality education solutions.</p>
                </section>
            </div>
        </div>
    );
};

export default Home;
