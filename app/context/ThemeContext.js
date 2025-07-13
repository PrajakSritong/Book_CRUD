import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      background: isDarkMode ? "#dc2020ff" : "#898989ff",
      surface: isDarkMode ? "#1e1e1e" : "#f5f5f5",
      primary: isDarkMode ? "#bb86fc" : "#007bff",
      text: isDarkMode ? "#ffffff" : "#000000ff",
      textSecondary: isDarkMode ? "#b3b3b3" : "#666666",
      border: isDarkMode ? "#333333" : "#e0e0e0",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};