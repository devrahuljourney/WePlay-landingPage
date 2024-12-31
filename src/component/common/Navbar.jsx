import React from 'react';
const logo = require("../../assets/logo.png");
const btn = require("../../assets/button.png");

export default function Navbar() {
  return (
    <div className="bg-transparent josefin w-full z-20 fixed w-full flex items-center justify-between px-6 py-4 shadow-lg">
      {/* Logo Section */}
      <div>
        <img className="w-[80px]" src={logo} alt="logo" />
      </div>

      {/* Navigation Links */}
      <div className="navlink w-[40%] h-[60px] flex justify-evenly items-center space-x-8 p-4 px-8 rounded-lg">
        <a
          className="text-white font-semibold hover:text-gray-300 transition-all"
          href="#home"
        >
          Home
        </a>
        <a
          className="text-white font-semibold hover:text-gray-300 transition-all"
          href="#about"
        >
          About
        </a>
        <a
          className="text-white font-semibold hover:text-gray-300 transition-all"
          href="#contact"
        >
          Contact
        </a>
      </div>

      {/* Button Section */}
      <button className="relative gaming-button">
  {/* Button Image */}
  <img className="w-[200px] h-[60px]" src={btn} alt="btn" />

  {/* Text on Button */}
  <p className="absolute inset-0 flex items-center justify-center text-white font-semibold">
    Download
  </p>
</button>

    </div>
  );
}
