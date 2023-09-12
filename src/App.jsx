import "./App.css";
import About from "../src/components/About.jsx"
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import {Encryption, Decryption} from "./components/Encryption.jsx";

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="card">
        <Encryption/>
        <About/>
        <PrivacyPolicy/>
        <Decryption/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
