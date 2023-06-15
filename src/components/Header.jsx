import React, { useContext } from "react";
import "./Header.css"
import { ThemeContext } from "../App";

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <div class="svg-holder" id={theme.isLight === "light-mode" ? "light" : "dark"}>
      <svg viewBox="0 0 1320 100">
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          REACTULATOR
        </text>
      </svg>
    </div>
  );
};

export default Header;
