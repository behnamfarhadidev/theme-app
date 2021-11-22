import React, { useState, createContext } from "react";
import { Layout } from "./Layout";
export const themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
  },
  light: {
    backgroundColor: "white",
    color: "black",
    height: "100vh",
  },
};
export const MyContext = createContext(themes.light);

export function ThemeApp() {
  function getFromLocalStorage() {
    if (localStorage.getItem("darkMode")) {
      return JSON.parse(localStorage.getItem("darkMode"));
    } else {
      return themes.dark;
    }
  }
  const initialTheme = getFromLocalStorage();
  const [theme, setTheme] = useState(initialTheme);

  return (
    <MyContext.Provider value={{ typeThemes: theme, themeChanger: setTheme }}>
      <Layout />
    </MyContext.Provider>
  );
}

export default ThemeApp;
