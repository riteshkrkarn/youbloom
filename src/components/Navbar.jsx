import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDetailPage = location.pathname === "/postdetail";

  // Redux theme state
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();
  const handleThemeToggle = () => dispatch({ type: "theme/toggle" });

  return (
    <nav
      className={`w-full backdrop-blur border-b shadow-sm px-4 py-2 flex items-center justify-between sticky top-0 z-20 transition-colors duration-200
        ${
          dark
            ? "bg-gray-900/90 border-blue-900"
            : "bg-white/80 border-blue-100"
        }`}
    >
      {isDetailPage ? (
        <>
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="mr-3 text-blue-600 hover:text-indigo-600 font-semibold px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
          >
            ← Back
          </button>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className={`font-bold text-xl tracking-tight select-none ${
                dark ? "text-white" : "text-indigo-700"
              }`}
            >
              MyBlog
            </span>
          </div>
          {/* Theme toggle */}
          <button
            onClick={handleThemeToggle}
            className={`ml-auto rounded-full p-2 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              dark
                ? "text-yellow-300 bg-gray-800 hover:bg-gray-700"
                : "text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
            }`}
            title="Toggle theme"
          >
            {dark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </>
      ) : (
        <>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              className={`font-bold text-xl tracking-tight select-none ${
                dark ? "text-white" : "text-indigo-700"
              }`}
            >
              MyBlog
            </span>
          </div>
          {/* Search bar (handled in main page) */}
          <div className="flex-1" />
          {/* Theme toggle */}
          <button
            onClick={handleThemeToggle}
            className={`ml-auto rounded-full p-2 transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              dark
                ? "text-yellow-300 bg-gray-800 hover:bg-gray-700"
                : "text-indigo-600 bg-indigo-50 hover:bg-indigo-100"
            }`}
            title="Toggle theme"
          >
            {dark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
