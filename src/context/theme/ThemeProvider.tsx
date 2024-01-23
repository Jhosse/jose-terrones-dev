import React, { ReactNode, useState } from "react";
import ThemeContext from "./ThemeContext";

interface IThemeProvider {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    return setIsDarkMode((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
