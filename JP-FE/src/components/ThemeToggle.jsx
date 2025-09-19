import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button className="p-2 rounded-md focus:outline-none" onClick={toggleTheme} aria-label="Toggle theme">
      {dark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
