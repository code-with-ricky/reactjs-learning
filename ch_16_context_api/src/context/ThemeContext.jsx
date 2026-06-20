import { useState } from "react";
import { createContext } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeDataContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeDataContext.Provider>
  );
};

export default ThemeContext;
