import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = ({ buttonText }) => {
  const { theme, setTheme } = useContext(ThemeDataContext);
  const handleToggle = () => {
    const html = document.querySelector("html");
    console.log(html);
    
    if (theme === "light") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  };
  return (
    <div
      onClick={handleToggle}
      className="px-4 py-2 rounded-lg bg-emerald-700 text-white active:scale-95 cursor-pointer"
    >
      {buttonText}
    </div>
  );
};

export default Button;
