import React, { useState, useEffect } from "react";

export const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
    border: "1px solid",
    borderColor: "#ffe300"
  },
  light: {
    backgroundColor: "white",
    color: "black",
    border: "1px solid"
  }
};

const initialThemeState = {
  dark: false,
  theme: themes.light,
  themeToggle: () => {}
};

const ThemeContext = React.createContext(initialThemeState);

const ThemeProvider = ({ children }) => {
  const [dark, setDarkMode] = useState(false);

  useEffect(() => {
    const darkSide = localStorage.getItem("dark") === "true";
    setDarkMode(darkSide);
  }, [dark]);

  const themeToggle = () => {
    const darkSide = !dark;
    localStorage.setItem("dark", JSON.stringify(darkSide));
    setDarkMode(darkSide);
  };

  const currentTheme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ currentTheme, dark, themeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
