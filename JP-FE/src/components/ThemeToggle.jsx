import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../utils/themeHelpers";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {dark ? <FaSun size={20} /> : <FaMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
