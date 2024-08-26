import { Link } from 'react-router-dom';
import { FaLock, FaUnlock, FaShieldAlt, FaUserSecret, FaInfoCircle, FaUserShield, FaCode, FaHeart } from 'react-icons/fa';
import "./Home.css";

function Home() {
  return (
    <div id="home" className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-between p-8 font-mono">
      <div className="max-w-4xl w-full flex-grow">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 glitch-text">ntR-Conceal</h1>
          <p className="text-xl text-green-400 px-4">
            <span className="typing-animation break-words">Secure_your_files_with_advanced_encryption</span>
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-green-500 p-8 rounded-lg hover:bg-green-900 hover:bg-opacity-20 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaLock className="mr-2" /> Encrypt
            </h2>
            <p className="mb-6">Protect your data from prying eyes.</p>
            <Link to="/encrypt" className="inline-block bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 transition duration-300">
              [Encrypt_Files]
            </Link>
          </div>
          <div className="border border-green-500 p-8 rounded-lg hover:bg-green-900 hover:bg-opacity-20 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaUnlock className="mr-2" /> Decrypt
            </h2>
            <p className="mb-6">Retrieve your classified information.</p>
            <Link to="/decrypt" className="inline-block bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 transition duration-300">
              [Decrypt_Files]
            </Link>
          </div>
          <div className="border border-green-500 p-8 rounded-lg hover:bg-green-900 hover:bg-opacity-20 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaInfoCircle className="mr-2" /> About
            </h2>
            <p className="mb-6">Learn more about ntR-Conceal and its features.</p>
            <Link to="/about" className="inline-block bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 transition duration-300">
              [About_Us]
            </Link>
          </div>
          <div className="border border-green-500 p-8 rounded-lg hover:bg-green-900 hover:bg-opacity-20 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaUserShield className="mr-2" /> Privacy Policy
            </h2>
            <p className="mb-6">Understand how we protect your data and privacy.</p>
            <Link to="/privacy-policy" className="inline-block bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 transition duration-300">
              [Privacy_Policy]
            </Link>
          </div>
        </div>
      </div>

      <footer className="w-full max-w-4xl text-center mt-8 border-t border-green-500 pt-4">
      <p className="mb-2">© {new Date().getFullYear()} ntR-Conceal. All rights reserved.</p>
        <p className="flex items-center justify-center">
          Made with <FaCode className="mx-1 text-green-400" /> and <FaHeart className="mx-1 text-green-400" /> by 
          <a href="https://github.com/bishwassagar" target="_blank" rel="noopener noreferrer" className="ml-1 text-green-400 hover:text-green-300">
            Bishwas Sagar
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;