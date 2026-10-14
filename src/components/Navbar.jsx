import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex gap-6 bg-white px-6 py-4 text-black dark:bg-gray-800 dark:text-white">
      <Link to="/" className="hover:text-blue-400">
        Home
      </Link>
      <Link to="/about" className="hover:text-blue-400">
        About
      </Link>
      <Link to="/blog" className="hover:text-blue-400">
        Blog
      </Link>

      <button
        onClick={toggleTheme}
        className="rounded-lg bg-gray-200 px-4 py-2 dark:bg-gray-700 ml-auto"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
