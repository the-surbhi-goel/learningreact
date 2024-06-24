import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "Grey";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const showAlert = (message, alertType) => {
    setAlert({
      message: message,
      alertType: alertType
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
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
        <Alert alert={alert}/>
        <TextForm heading="Enter your text" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
