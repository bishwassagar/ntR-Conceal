import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center p-8 font-mono">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl font-bold mb-8 glitch-text">About nTR-Conceal</h1>
        <div className="border border-green-500 p-8 rounded-lg mb-8">
          <p className="mb-4">
            <strong>nTR-Conceal</strong> is a lightweight, offline tool designed for secure file encryption and decryption. 
            Built with a focus on privacy, nTR-Conceal ensures that your data remains protected without the need for an internet connection.
          </p>
          <p className="mb-4">
            It operates entirely on your device, keeping your files and encryption keys fully under your control. 
            No personal data is collected, stored, or transmitted, making it a truly privacy-focused solution.
          </p>
          <p className="mb-4">
            Being open-source, nTR-Conceal’s code is available for public review, promoting transparency and trust in its security measures. 
            It is completely free to use, with no hidden fees or monetization of your data.
          </p>
          <p>
            For more information, visit the{' '}
            <a href="https://github.com/bishwassagar/ntR-Conceal" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
              nTR-Conceal GitHub repository
            </a>.
          </p>
        </div>
        <Link to="/" className="inline-block bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 transition duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default About;
