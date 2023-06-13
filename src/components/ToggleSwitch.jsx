import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = (props) => {
  //true - lightMode
  //false - darkMode
  // const [isLight, setIsLight] = useState(true);
  // const bodyElement = document.querySelector("body");
  // //   console.log(bodyElement);
  // const toggleHandler = () => {
  //   // console.log("Toggle switch");
  //   if (isLight) {
  //     bodyElement.classList.add("dark-mode");
  //     bodyElement.classList.remove("light-mode");
  //     setIsLight(false);
  //   } else {
  //     bodyElement.classList.add("light-mode");
  //     bodyElement.classList.remove("dark-mode");
  //     setIsLight(true);
  //   }
  // };

  return (
    <div className="toggle-container">
      <label for="theme" class="theme">
        <span class="theme__toggle-wrap">
          <input
            id="theme"
            class="theme__toggle"
            type="checkbox"
            role="switch"
            name="theme"
            value="dark"
            onClick={props.toggle}
            
          />
          <span class="theme__fill"></span>
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
