import { useTheme } from "../contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
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
