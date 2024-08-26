import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center p-8 font-mono">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl font-bold mb-8 glitch-text">Privacy Policy</h1>
        <div className="border border-green-500 p-8 rounded-lg mb-8">
          <p className="mb-4">
            nTR-Conceal prioritizes your privacy. The tool is designed to securely encrypt and decrypt files without requiring an internet connection.
          </p>
          <h2 className="text-2xl font-bold mb-4">Key Privacy Principles</h2>
          <ul className="list-disc list-inside mb-4">
            <li>No personal data is collected, stored, or transmitted.</li>
            <li>All operations, including encryption and decryption, are performed locally on your device.</li>
            <li>No third-party services or tracking technologies are used.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Open Source and Transparent</h2>
          <p className="mb-4">
            nTR-Conceal’s code is open-source, allowing public review to ensure that it remains secure and privacy-focused.
          </p>
          <h2 className="text-2xl font-bold mb-4">No Cookies or Tracking</h2>
          <p className="mb-4">
            The tool does not use cookies or any form of tracking. Your activities are not monitored or analyzed.
          </p>
          <h2 className="text-2xl font-bold mb-4">Unchanging Commitment</h2>
          <p className="mb-4">
            This privacy policy is fixed and will not change. nTR-Conceal is committed to maintaining your privacy and security.
          </p>
        </div>
        <Link to="/" className="inline-block bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 transition duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default PrivacyPolicy;
