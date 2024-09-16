import React from 'react';
import Slider from "react-slick";
import { songs } from '../MusicData';
import { CgPlayButtonO } from 'react-icons/cg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Slide.css'

const MassSongSlider = ({ darkMode }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={`slider-container px-10  ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className='text-2xl font-bold mb-4'>Mass Songs</h2>
      <Slider {...settings}>
        {
          songs.map((item, index) => (
            <div key={index} className='relative group'>
              <div className={`box rounded-lg overflow-hidden shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='w-20 h-20 sm:h-36 md:h-40 lg:h-48 object-cover'
                />
                <div className='relative'>
                  <div className='absolute bottom-2 right-1'>
                    <button className={`rounded-full shadow-lg ${darkMode ? 'bg-black' : 'bg-white'}`}>
                      <CgPlayButtonO className={`text-xl ${darkMode ? 'text-white' : 'text-gray-700'}`} />
                    </button>
                  </div>
                </div>
              </div>
                <div className='p-1'>
                  <h3 className='text-md text-center font-semibold'>{item.name}</h3>
                </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default MassSongSlider;
