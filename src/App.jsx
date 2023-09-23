import "./App.css";
import Controls from "./components/Controls.jsx";
import Footer from "./components/Footer.jsx"
import Encryption from "./components/Encryption.jsx"
import Decryption from "./components/Decryption.jsx"

function App() {

  return (
    <>
      <Controls/>
      <Encryption/>
      <Decryption/>
      <Footer/>
    </>
  );
}

export default App;
