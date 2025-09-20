import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {darkMode ? <FaSun size={20} /> : <FaMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
