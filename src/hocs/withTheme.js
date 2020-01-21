import React from "react";
import { ThemeContext } from "../theme-context.js";

export function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...theme} {...props} />}
      </ThemeContext.Consumer>
    );
  };
}
