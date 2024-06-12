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
        <Route path="/" element={<Login />} /> 
        <Route path="/Home" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
