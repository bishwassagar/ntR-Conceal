import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from "./components/Footer.jsx"
import Encryption from "./components/Encryption.jsx"
import Decryption from "./components/Decryption.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Encryption />
    <Decryption />
    <Footer />
  </React.StrictMode>,
)
