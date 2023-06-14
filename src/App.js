import React, { useState, createContext } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import ToggleSwitch from "./components/ToggleSwitch";
import ReactSwitch from "react-switch";

//exporting theme context to use theme properties
//on all components without passing props
export const ThemeContext = createContext(null);

function App() {
  const [isLight, setIsLight] = useState("light-mode");

  const toggleHandler = () => {
    setIsLight((curr) => (curr === "light-mode" ? "dark-mode" : "light-mode"));
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleHandler }}>
      <div className="app flex" id={isLight}>
        <div className="flex">
          <div className="toggle-container">
            <ToggleSwitch />
          </div>
          <Calculator />
          {/* <ReactSwitch
            onChange={toggleHandler}
            checked={isLight === "dark-mode"}
          /> */}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
