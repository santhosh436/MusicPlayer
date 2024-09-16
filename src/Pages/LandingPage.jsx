import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import EverGreenSongSlider from "../Sliders/EverGreenSongSlider";
import MassSongSlider from "../Sliders/MassSongSlider";
import MiniPlayer from "../Components/MiniPlayer";
import { songs } from "../MusicData";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSong, setCurrentSong] = useState(null); // State to hold the currently selected song

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark or light mode to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#1a202c"; // Tailwind's dark bg-gray-900
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff"; // Tailwind's light bg-white
    }
  }, [darkMode]);

  // Function to handle song selection from the slider
  const handleSongSelect = (song) => {
    setCurrentSong(song); // Update the current song
  };

  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <EverGreenSongSlider darkMode={darkMode} onSongSelect={handleSongSelect} />
      <MassSongSlider darkMode={darkMode} onSongSelect={handleSongSelect} />
      <MiniPlayer song={currentSong} />
    </div>
  );
};

export default LandingPage;
