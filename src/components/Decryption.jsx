import { Link } from 'react-router-dom';
import { useState } from 'react';
import { generateKey, decryptFile } from './crypto';
import Message from './Message'; // Import the Message component

function Decryption() {
  const [key, setKey] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isDecrypting, setIsDecrypting] = useState(false);

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDecrypt = async () => {
    if (!file || !key) {
      setMessage({ type: 'error', text: 'Please upload a file and enter a key.' });
      return;
    }

    if (!file.name.endsWith('.ntrConceal')) {
      setMessage({ type: 'error', text: 'Please select a file with .ntrConceal extension.' });
      return;
    }

    setIsDecrypting(true);

    try {
      const derivedKey = await generateKey(key);
      await decryptFile(derivedKey, file);
      setMessage({ type: 'success', text: 'File decrypted successfully!' });
    } catch (error) {
      console.error('Decryption failed:', error);
      setMessage({ type: 'error', text: 'Decryption failed. Please check your key and try again.' });
    } finally {
      setIsDecrypting(false);
    }
  };

  return (
    <div id="decryption" className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center p-8 font-mono">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl font-bold mb-4 glitch-text">D3crypt Files</h1>
        <p className="mb-8 text-xl text-green-400">
          Upload your .ntrConceal files here and let the tool do its thing! The decrypted file will be downloaded automatically.
        </p>
        <div className="border border-green-500 p-8 rounded-lg mb-8">
          {message.text && <Message type={message.type} text={message.text} />}
          <div className='flex flex-col space-y-4'>
            <input 
              id="denckey-value" 
              className="w-full px-4 py-2 text-green-500 bg-black border border-green-500 rounded-full placeholder-green-700 focus:outline-none focus:border-green-400" 
              placeholder="Enter Key Value" 
              type="password"
              value={key}
              onChange={handleKeyChange}
            />
            <div className="flex space-x-4">
            <label className="flex-1 bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 transition duration-300 cursor-pointer text-center">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                {file ? file.name : 'Choose File'}
              </label>
              <button 
                className={`flex-1 bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 transition duration-300 ${isDecrypting ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleDecrypt}
                disabled={isDecrypting}
              >
                {isDecrypting ? 'Decrypting...' : 'Decrypt!'}
              </button>
            </div>
          </div>
        </div>
        <Link to="/" className="inline-block bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 transition duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Decryption;
