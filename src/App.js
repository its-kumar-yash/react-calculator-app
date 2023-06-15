import React, { useState, createContext } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
// import mathSvg from "./assets/math.svg";
// import calSvg from "./assets/cal.svg";

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
        <div className="main-container">
          <div className="header-container">
            <Header />
          </div>
          <div className="calculator-container">
            <Calculator />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
