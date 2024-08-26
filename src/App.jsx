import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import './App.css';
import Encryption from "./components/Encryption.jsx";
import Decryption from "./components/Decryption.jsx";
import About from './components/About.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';

function App() {
  return (
    <>
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encrypt" element={<Encryption />} />
        <Route path="/decrypt" element={<Decryption />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  </React.StrictMode>,
    </>
  )
}

export default App