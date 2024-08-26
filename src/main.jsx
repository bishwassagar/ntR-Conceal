import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Encryption from "./components/Encryption.jsx";
import Decryption from "./components/Decryption.jsx";
import About from './components/About.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/encryption" element={<Encryption />} />
        <Route path="/decryption" element={<Decryption />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
