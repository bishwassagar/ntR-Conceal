import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center p-8 font-mono">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl font-bold mb-8 glitch-text">Privacy Policy</h1>
        <div className="border border-green-500 p-8 rounded-lg mb-8">
          <p className="mb-4">
            At notTheRoot, your privacy is our top priority. Our tool helps you encrypt and decrypt files securely without needing an internet connection.
          </p>
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="mb-4">
            nTR-Conceal runs entirely offline on your device. This means:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>No personal data is collected or stored.</li>
            <li>No activity is tracked or shared.</li>
            <li>All file processing happens locally, with no data sent online.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Security</h2>
          <p className="mb-4">
            We use AES-GCM (Advanced Encryption Standard in Galois/Counter Mode) to ensure that your files are securely encrypted and decrypted. Your data remains on your device and is never shared with others.
          </p>
          <h2 className="text-2xl font-bold mb-4">Free and Transparent</h2>
          <p className="mb-4">
            nTR-Conceal is completely free to use. We don’t monetize your data or use it for anything other than encryption and decryption.
          </p>
          <h2 className="text-2xl font-bold mb-4">No Changes</h2>
          <p className="mb-4">
            This privacy policy will remain as it is. We have no plans to change how we handle your privacy.
          </p>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions, feel free to contact us.
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
