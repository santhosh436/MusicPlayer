import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLibraryMusic, MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden">
        <div
          className={`flex justify-between items-center shadow-md p-2 ${
            darkMode
              ? "bg-gradient-to-r from-gray-700 via-black to-black text-white"
              : "bg-white text-black"
          }`}
        >
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="focus:outline-none w-12 h-6 bg-black dark:flex justify-end dark:bg-white text-white dark:text-black rounded-3xl"
          >
            {darkMode ? (
              <MdDarkMode className="text-2xl" />
            ) : (
              <CiLight className="text-2xl" />
            )}
          </button>

          {/* Buttons */}
          <div className="flex space-x-4 drop-shadow-lg">
            <button
              className={`px-4 py-1 rounded-3xl hover:bg-opacity-75 ${
                darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
              }`}
            >
              All
            </button>
            <button
              className={`px-4 py-1 rounded-3xl hover:bg-opacity-75 ${
                darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Playlist
            </button>
            <button
              className={`px-4 py-1 rounded-3xl hover:bg-opacity-75 ${
                darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
              }`}
            >
              Newest
            </button>
          </div>
        </div>

        {/* Fixed Bottom Navbar */}
        {/* Fixed Bottom Navbar */}
        <div className="fixed bottom-0 left-0 w-full h-12 bg-white dark:bg-gradient-to-r from-gray-700 via-black to-black flex justify-around items-center border-t-2 shadow-2xl z-50">
          <IoMdHome className="text-2xl text-gray-800 dark:text-white" />
          <FaSearch className="text-2xl text-gray-800 dark:text-white" />
          <CgProfile className="text-2xl text-gray-800 dark:text-white" />
          <MdOutlineLibraryMusic className="text-2xl text-gray-800 dark:text-white" />
        </div>

      </div>

      {/* Desktop View */}
      <nav
        className={`hidden md:flex justify-between items-center px-6 py-1 drop-shadow-lg  border-b-black  overflow-hidden ${
          darkMode
            ? "bg-gradient-to-r from-gray-700 via-black to-black text-white"
            : "bg-white text-black"
        }`}
      >
        {/* Logo and Name */}
        <div>
          <img src="./assets/Logo.png" alt="Logo" className="h-12 w-52" />
        </div>

        {/* Search Bar and Buttons */}
        <div className="flex items-center justify-end space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className={`px-4 py-2 rounded-lg focus:outline-none ${
              darkMode ? "bg-gray-600 text-white" : "bg-gray-200 text-black"
            }`}
          />
          <button
            className={`px-4 py-2 rounded-lg hover:bg-opacity-75 ${
              darkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"
            }`}
          >
            Search
          </button>
          <button
            className={`px-4 py-2 rounded-lg hover:bg-opacity-75 ${
              darkMode ? "bg-green-600 text-white" : "bg-green-500 text-white"
            }`}
          >
            Login
          </button>
          <CgProfile className="text-3xl" />
          <button
            onClick={toggleDarkMode}
            className="focus:outline-none w-12 h-6 bg-black dark:flex justify-end dark:bg-white text-white dark:text-black rounded-3xl"
          >
            {darkMode ? (
              <MdDarkMode className="text-2xl" />
            ) : (
              <CiLight className="text-2xl" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
