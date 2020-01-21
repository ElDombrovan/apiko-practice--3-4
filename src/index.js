import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./theme-context.js";
import App from "./components/App.js";
import "./styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  rootElement
);
