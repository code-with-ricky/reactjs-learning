import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      className="w-full flex items-center justify-center gap-x-2 py-2.5 rounded-lg bg-[#222]  hover:bg-[#464646] text-white transition"
      onClick={toggleTheme}
    >
      {theme === "light" ? "☀️" : "🌙"}{"  "}
      {theme}
    </button>
  );
};

export default ThemeToggleButton;
