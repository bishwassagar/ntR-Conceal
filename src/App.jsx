import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Encryption from './components/Encryption.jsx';
import Decryption from './components/Decryption.jsx';
import About from './components/About.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/encrypt" element={<Encryption />} />
      <Route path="/decrypt" element={<Decryption />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
