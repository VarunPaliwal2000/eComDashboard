import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex justify-end p-4 bg-white dark:bg-gray-800 shadow-sm">
      <ThemeToggle />
    </header>
  );
};

export default Header;
