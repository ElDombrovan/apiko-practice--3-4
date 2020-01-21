import React, { useContext } from "react";
import { ThemeContext } from "../theme-context.js";
import TextLabel from "./TextLabel.js";

const ToggleButton = () => {
  const { currentTheme, dark, themeToggle } = useContext(ThemeContext);
  return (
    <button
      className="ToggleButton"
      type="button"
      onClick={themeToggle}
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
        outline: "none",
        border: currentTheme.border,
        borderColor: currentTheme.borderColor
      }}
    >
      {!dark ? (
        <TextLabel>dark mode</TextLabel>
      ) : (
        <TextLabel>light mode</TextLabel>
      )}
    </button>
  );
};

export default ToggleButton;
