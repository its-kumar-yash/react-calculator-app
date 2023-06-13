import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {

  const [isLight, setIsLight] = useState(true);
  const bodyElement = document.querySelector("body");
  bodyElement.classList.add("light-mode");
  //   console.log(bodyElement);
  const toggleHandler = () => {
    // console.log("Toggle switch");
    if (isLight) {
      bodyElement.classList.add("dark-mode");
      bodyElement.classList.remove("light-mode");
      setIsLight(false);
    } else {
      bodyElement.classList.add("light-mode");
      bodyElement.classList.remove("dark-mode");
      setIsLight(true);
    }
  };


  return (
    <div className="App">
      <ToggleSwitch toggle={toggleHandler} />
      <Calculator mode={isLight} />
    </div>
  );
}

export default App;
