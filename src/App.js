import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'Grey';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      {/* Passing props */}
      <Navbar
        title="Learning React"
        aboutText="About Us"
        mode={mode}
        changeMode={changeMode}
      />
      <div className="container">
        <TextForm heading="Enter your text"  mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
