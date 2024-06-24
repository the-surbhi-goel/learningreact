import { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [theme, setTheme] = useState({
    mode: "light",
    text: "dark",
    button: "success",
  });
  const [alert, setAlert] = useState(null);

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  };

  const changeModeColors = (mode, textColor, btnColor) => {
    setTheme({
      mode: mode,
      text: textColor,
      button: btnColor,
    });
  };

  const changeTheme = (className) => {
    removeBodyClasses();

    if (className === "light") {
      document.body.style.backgroundColor = "white";
      changeModeColors(className, "black", "success");
    } else if (className === "dark") {
      document.body.style.backgroundColor = "grey";
      changeModeColors(className, "white", "primary");
    } else if (className === "danger") {
      document.body.style.backgroundColor = "#DD6B76";
      changeModeColors(className, "white", className);
    } else if (className === "success") {
      document.body.style.backgroundColor = "#54AA82";
      changeModeColors(className, "white", className);
    } else if (className === "primary") {
      document.body.style.backgroundColor = "#85AFEC";
      changeModeColors(className, "white", className);
    } else if (className === "warning") {
      document.body.style.backgroundColor = "#E7CB75";
      changeModeColors(className, "black", className);
    } else {
      document.body.classList.add("bg-" + className);
    }
  };

  const changeMode = () => {
    if (theme.mode === "light") {
      document.body.style.backgroundColor = "grey";
      changeModeColors("dark", "white", "primary");

      document.title = "React App - Dark Mode"; // To Change Title
      showAlert("Dark Mode has been enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      changeModeColors("light", "black", "success");

      document.title = "React App"; // To Change Title
      showAlert("Light Mode has been enabled", "success");
    }
  };

  const showAlert = (message, alertType) => {
    setAlert({
      message: message,
      alertType: alertType,
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
        theme={theme}
        changeMode={changeMode}
        changeTheme={changeTheme}
      />
      <div className="container">
        <Alert alert={alert} />
        <TextForm heading="Enter your text" theme={theme} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
