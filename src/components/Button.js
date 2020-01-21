import React from "react";
import { withTheme } from "../hocs/withTheme.js";

const Button = ({ currentTheme }) => {
  const { backgroundColor, color, border, borderColor } = currentTheme;
  return (
    <button
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
        outline: "none",
        border: currentTheme.border
      }}
    >
      btn
    </button>
  );
};

const ThemedButton = withTheme(Button);

export default ThemedButton;
