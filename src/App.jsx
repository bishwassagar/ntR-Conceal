import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "../src/components/About.jsx"
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="card">
        <About/>
        <PrivacyPolicy/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
