import React, { useState, useRef, useEffect } from 'react';
import { IoPlayForwardOutline, IoPlayBackOutline } from "react-icons/io5";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { FaVolumeHigh, FaChevronDown } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoPlusCircle } from "react-icons/go";

const MiniPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Handle play/pause functionality
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle when the song ends
  const handleEnded = () => {
    setIsPlaying(false);
  };

  // Update duration when song changes
  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });
    }
  }, [song]);

  // Update current time on timeupdate
  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      return () => audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);

  // Handle progress bar change
  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  // Toggle the expanded view for mobile devices
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!song) {
    return null; // Return nothing if no song is selected
  }

  return (
    <>
      {/* MiniPlayer for Laptop Devices */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-4 text-white z-50 hidden md:block">
        <div className="flex items-center justify-between relative">
          {/* Left Section: Album Art and Song Info */}
          <div className="flex items-center">
            <img
              src={song.image}
              alt={song.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <h3 className="text-sm font-bold truncate">{song.name}</h3>
              <p className="text-xs text-gray-400 truncate">{song.artist}</p>
            </div>
          </div>

          {/* Center Section: Playback Controls */}
          <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
            <button 
              className="rounded-full bg-white p-2" 
              aria-label="Previous song"
            >
              <IoPlayBackOutline className='text-black text-xl' />
            </button>
            <button
              onClick={handlePlayPause}
              className="rounded-full bg-pink-500 p-2 mx-4"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <CiPause1 className='text-white text-xl' /> : <CiPlay1 className='text-white text-xl' />}
            </button>
            <button 
              className="rounded-full bg-white p-2"
              aria-label="Next song"
            >
              <IoPlayForwardOutline className='text-black text-xl' />
            </button>
          </div>

          {/* Right Section: Additional Controls */}
          <div className='flex items-center space-x-4'>
            <MdOutlinePlaylistAdd className='text-2xl' aria-label="Add to playlist" />
            <FaVolumeHigh className='text-2xl' aria-label="Volume control" />
          </div>
        </div>
      </div>

      {/* MiniPlayer for Mobile Devices */}
      <div className="fixed bottom-[48px] left-0 w-full bg-gray-900 p-2 text-white z-50 md:hidden">
        {!isExpanded ? (
          <div className="flex items-center justify-between" onClick={toggleExpand}>
            {/* Left Section: Song Info */}
            <div className="truncate text-sm font-bold">
              {song.name}
            </div>

            {/* Right Section: Playback Controls and Add Icon */}
            <div className="flex items-center space-x-4">
              <MdOutlinePlaylistAdd className='text-xl' onClick={(e) => e.stopPropagation()} />
              <button
                onClick={handlePlayPause}
                className="rounded-full bg-pink-500 p-2"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <CiPause1 className='text-white text-xl' /> : <CiPlay1 className='text-white text-xl' />}
              </button>
            </div>
          </div>
        ) : (
          <div className="fixed inset-0 bg-gradient-to-b from-purple-600 to-blue-500 text-white p-4 z-50 overflow-auto">
            {/* Top Row: Close Icon, Artist Name, and More Options */}
            <div className="flex justify-between items-center">
              <button className="text-2xl" onClick={toggleExpand} aria-label="Close">
                <FaChevronDown />
              </button>
              <h2 className="text-lg font-bold">{song.artist}</h2>
              <BsThreeDotsVertical className='text-2xl' aria-label="More options" />
            </div>

            {/* Album Art */}
            <div className="flex justify-center mt-10 mb-10 ">
              <img
                src={song.image}
                alt={song.name}
                className="w-72 h-72 rounded-md object-cover"
              />
            </div>

            {/* Song Info and Add Icon */}
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-lg font-bold">{song.name}</h2>
              <GoPlusCircle className='text-3xl' aria-label="Add" />
            </div>

            {/* Audio Progress Bar */}
            <input
              type="range"
              className="w-full mt-4"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              step="0.1" // To allow fine adjustments
            />

            {/* Song Duration */}
            <div className="flex justify-between text-sm text-gray-300 mt-2">
              <span>{`${Math.floor(currentTime / 60)}:${("0" + Math.floor(currentTime % 60)).slice(-2)}`}</span>
              <span>{`${Math.floor(duration / 60)}:${("0" + Math.floor(duration % 60)).slice(-2)}`}</span>
            </div>

            {/* Playback Controls */}
            <div className="flex justify-between items-center mt-4">
              <FaVolumeHigh className='text-3xl' aria-label="Volume control" />
              <div className="flex space-x-5">
                <button 
                  className="rounded-full bg-white p-4 " 
                  aria-label="Previous song"
                >
                  <IoPlayBackOutline className='text-black text-3xl' />
                </button>
                <button
                  onClick={handlePlayPause}
                  className="rounded-full bg-pink-500 p-4 mx-4"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <CiPause1 className='text-white text-2xl' /> : <CiPlay1 className='text-white text-3xl' />}
                </button>
                <button 
                  className="rounded-full bg-white p-4"
                  aria-label="Next song"
                >
                  <IoPlayForwardOutline className='text-black text-3xl ' />
                </button>
              </div>
              <MdOutlinePlaylistAdd className='text-3xl' aria-label="Add to playlist" />
            </div>
          </div>
        )}
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={song.song}
        onEnded={handleEnded}
        preload="auto"
      />
    </>
  );
};

export default MiniPlayer;
