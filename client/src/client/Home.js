// src/client/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Show a confirmation dialog
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      // If the user confirms, perform logout logic here (e.g., clearing user session, tokens)
      navigate('/'); // Navigate back to the login page
    }
  };

  return (
    <div>
      <nav className="top-bar">
        <div className="top-bar-left">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#student">Student</a>
        </div>
        <div className="top-bar-right">
          <button className="logout-button" onClick={handleLogout}>Log out</button>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
      </div>
    </div>
  );
}

export default Home;
