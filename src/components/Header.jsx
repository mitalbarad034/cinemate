
import { React } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    if (searchTerm) {
      e.target.reset();
      return navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    } else {
      e.target.reset();
      return navigate(`/`);
    }
  };

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed w-full top-0 z-20">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">MovieList</span>
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <NavLink to="/" className="text-blue-600 dark:text-blue-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Movies
              </NavLink>
            </li>

            <li>
              <NavLink to="/trending" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                Trending
              </NavLink>
            </li>
          </ul>

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked={(isDarkMode)} onChange={() => setIsDarkMode(!isDarkMode)} />
            <div className="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
            <span className="select-none ms-3 text-sm font-medium text-heading">{(isDarkMode) ? `Dark` : `Light`}</span>
          </label>
          {/* Search */}
          <div className="hidden md:block">
            <form onSubmit={handleSubmit}>
              <input
                name="search"
                type="text"
                placeholder="Search movies..."
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </form>

          </div>

        </div>
      </nav>
    </header>
  )
}
