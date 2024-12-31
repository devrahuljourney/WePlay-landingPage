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

        <div className="relative flex justify-center lg:justify-end items-center">
        

          {/* Cloud Effect */}
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, rgba(255,20,147,0.4) 0%, rgba(255,20,147,0) 70%)`,
              filter: 'blur(20px)',
              zIndex: -1,
            }}
          ></div>

          {/* Victor Image */}
          <img
            src={victor}
            alt="Gaming Image"
            className="w-[200px] sm:w-[400px] md:w-[500px] lg:w-[500px] xl:w-[800px] object-contain relative"
            style={{
              animation: "float 5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      
    </div>
  );
}
