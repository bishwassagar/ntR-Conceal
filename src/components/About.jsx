import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center p-8 font-mono">
      <div className="max-w-4xl w-full">
        <h1 className="text-6xl font-bold mb-8 glitch-text">About ntR-Conceal</h1>
        <div className="border border-green-500 p-8 rounded-lg mb-8">
          <p className="mb-4">
            <strong>ntR-Conceal</strong> is a robust encryption solution designed to secure your files, ensuring that 
            sensitive data remains protected from unauthorized access. Whether you're safeguarding personal documents or 
            confidential business information, ntR-Conceal offers an easy-to-use interface and reliable encryption methods 
            to keep your data hidden and secure.
          </p>
          <p className="mb-4">
            With a commitment to privacy and security, ntR-Conceal is your trusted tool for maintaining data integrity 
            and confidentiality.
          </p>
          <p>
            For more information, visit the{' '}
            <a href="https://github.com/bishwassagar/ntR-Conceal" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
              ntR-Conceal GitHub repository
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