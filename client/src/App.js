// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './client/Home';
import Login from './client/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login as default route */}
        <Route path="/Home" element={<Home />} /> {/* Home route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
