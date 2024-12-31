import React from 'react';
import TextSpan from '../../common/TextSpan';
const background = require("../../../assets/body-bg.jpg");
const victor = require("../../../assets/victor.png");

export default function HeroSection() {
  return (
    <div
      className="w-full min-h-[60vh] h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center banner-image"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Dark overlay on background to improve text visibility */}
      <div className="absolute inset-0 bg-black opacity-50 h-full w-full"></div>

      {/* Title Section */}
      <div className="z-10 flex flex-col lg:flex-row items-center md:justify-evenly justify-center w-full px-6 text-center lg:text-left">
        
        {/* Left Section: Text */}
        <div className="text-white mb-6 lg:mb-0">
          <div className="title text-white font-[120px] lg:font-[150px]">
            <h1 className="text-[40px] sm:text-[80px] lg:text-[120px] flex flex-wrap justify-center gap-6">
              <div className="bebas">
                <span className="bebas a">W</span>
                <span className="bebas a">E</span>
              </div>
              <div className="bebas">
                <span className="bebas a">P</span>
                <span className="bebas a">L</span>
                <span className="bebas a">A</span>
                <span className="bebas a">Y</span>
              </div>
              <div className="bebas">
                <span className="bebas a">I</span>
                <span className="bebas a">N</span>
                <span className="bebas a">D</span>
                <span className="bebas a">I</span>
                <span className="bebas a">A</span>
              </div>
            </h1>
          </div>
          <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium mt-4">
            Find Cafes. Play Games. Compete Globally. Win Big.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={victor}
            alt="Gaming Image"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] object-contain"
          />
        </div>

      </div>
    </div>
  );
}
