import React from "react";
import T from "prop-types";
import { withTheme } from "../hocs/withTheme.js";
import ToggleButton from "./ToggleButton.js";
import TextLabel from "./TextLabel.js";

const Header = ({ currentTheme }) => {
  const { backgroundColor, color, borderColor } = currentTheme;

  return (
    <div
      className="Header"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <TextLabel style={{ color: borderColor }}>Star Wars API</TextLabel>
      <ToggleButton />
    </div>
  );
};

Header.propTypes = {
  currentTheme: T.string.isRequired
};

const ThemedHeader = withTheme(Header);
export default ThemedHeader;
