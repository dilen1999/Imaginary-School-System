import React from 'react';
import '../App.css'; 

function Home() {
  return (
    <div>
      <nav className="top-bar">
        <div className="top-bar-left">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#student">Student</a>
        </div>
        <div className="top-bar-right">
          <button className="logout-button">Log out</button>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        
      </div>
    </div>
  );
}

export default Home;
