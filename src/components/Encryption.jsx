import { useState } from 'react';
import CryptoJS from 'crypto-js';

function Encryption() {
  const [file, setFile] = useState(null);
  const [key, setKey] = useState('');
  const [encryptedFile, setEncryptedFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handleEncrypt = () => {
    if (!file || !key) {
      alert('Please select a file and enter a key.');
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const fileDataArrayBuffer = reader.result;
      const fileDataWordArray = CryptoJS.lib.WordArray.create(fileDataArrayBuffer);

      const encryptedData = CryptoJS.AES.encrypt(fileDataWordArray, key, {
        mode: CryptoJS.mode.CFB,
        padding: CryptoJS.pad.Pkcs7,
      });

      const encryptedDataString = encryptedData.toString();

      setEncryptedFile(encryptedDataString);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h1>File Encryption</h1>
      <input type="file" onChange={handleFileChange} />
      <br />
      <input
        type="text"
        placeholder="Enter encryption key"
        value={key}
        onChange={handleKeyChange}
      />
      <br />
      <button onClick={handleEncrypt}>Encrypt File</button>
      <br />
      {encryptedFile && (
        <div>
          <h2>Encrypted File:</h2>
          <a href={`data:application/octet-stream;base64,${encryptedFile}`} download={`encrypted_${file.name}`}>
            Download Encrypted File
          </a>
        </div>
      )}
    </div>
  );
}

function Decryption() {
    const [encryptedFile, setEncryptedFile] = useState('');
    const [decryptionKey, setDecryptionKey] = useState('');
    const [decryptedFile, setDecryptedFile] = useState('');
  
    const handleEncryptedFileChange = (e) => {
      const selectedEncryptedFile = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        const encryptedFileData = reader.result;
        setEncryptedFile(encryptedFileData);
      };
  
      reader.readAsText(selectedEncryptedFile);
    };
  
    const handleDecryptionKeyChange = (e) => {
      setDecryptionKey(e.target.value);
    };
  
    const handleDecrypt = () => {
      if (!encryptedFile || !decryptionKey) {
        alert('Please select an encrypted file and enter the decryption key.');
        return;
      }
  
      try {
        const decryptedData = CryptoJS.AES.decrypt(encryptedFile, decryptionKey, {
          mode: CryptoJS.mode.CFB,
          padding: CryptoJS.pad.Pkcs7,
        });
  
        if (decryptedData.sigBytes <= 0) {
          alert('Decryption failed. Please check the decryption key.');
          return;
        }
  
        // Check if the decrypted data is text or binary
        const isText = isValidUtf8(decryptedData.toString(CryptoJS.enc.Utf8));
  
        if (isText) {
          // It's text data, display it as a string
          const decryptedText = decryptedData.toString(CryptoJS.enc.Utf8);
          setDecryptedFile(decryptedText);
        } else {
          // It's binary data, handle it differently (e.g., save it as a file)
          alert('Decrypted data is not text. It may be binary data.');
          // You can add code here to handle binary data, like saving it to a file
        }
      } catch (error) {
        alert('Decryption failed. Please check the decryption key.');
        console.error('Decryption error:', error);
      }
    };
  
    return (
      <div>
        <h1>File Decryption</h1>
        <input type="file" onChange={handleEncryptedFileChange} />
        <br />
        <input
          type="text"
          placeholder="Enter decryption key"
          value={decryptionKey}
          onChange={handleDecryptionKeyChange}
        />
        <br />
        <button onClick={handleDecrypt}>Decrypt File</button>
        <br />
        {decryptedFile && (
          <div>
            <h2>Decrypted File:</h2>
            <pre>{decryptedFile}</pre>
          </div>
        )}
      </div>
    );
  }
  
  

export { Encryption, Decryption };
