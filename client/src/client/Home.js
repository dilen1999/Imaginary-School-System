import React from "react";
import { useNavigate } from "react-router-dom";
// import img1 from "../images/welcomimg.png";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <div >
      <nav className="top-bar">
        <div className="top-bar-left">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#student">Student</a>
        </div>
        <div className="top-bar-right">
          <button className="logout-button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to the Home Page</h1>
      </div>
    </div>
  );
}

export default Home;
