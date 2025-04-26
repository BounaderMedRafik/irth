'use client'
import React from "react";
import Link from "next/link";
import { Inknut_Antiqua } from 'next/font/google';

const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inknut-antiqua',
});

const Hero = () => {
  return (
    <div 
      className="w-full h-screen flex flex-col md:flex-row items-center justify-center"
      style={{ 
        backgroundImage: "url('landing imgs/IMG_3333 2 (1).png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Left Section */}
      <div className="w-full md:w-2/5 h-full flex flex-col justify-start pt-[10vh] gap-8 md:gap-20">
        {/* Main Content */}
        <div className="h-auto flex flex-col items-center gap-4 pl-[10%] pt-4">
          <div className="flex flex-col text-2xl md:text-4xl font-semibold gap-2 items-start">
            <p className={`${inknutAntiqua.variable} font-serif`}>Preserving Heritage</p>
            <p className="text-base md:text-4xl font-semibold">With Intelligence</p>
          </div>
          <p className="font-normal text-sm md:text-base">AI-powered exploration of cultural legacy</p>
          <div className="flex gap-4">
            <button className="bg-[#D7FCD4] px-4 py-2 w-40 font-semibold rounded-lg cursor-pointer">
              Start Exploring
            </button>
            <Link href="/chat">
              <button className="border border-black px-4 py-2 w-40 font-semibold rounded-lg cursor-pointer hover:bg-gray-100">
                Chat with IRTH
              </button>
            </Link>
          </div>
        </div>

        {/* Icons Section */}
        <div className="w-full h-48 md:h-1/4 flex flex-col gap-8 md:justify-between items-center">
          <div className="w-full h-40 flex gap-6 justify-center items-center">
            <div className="flex flex-col items-center font-medium">
              <img 
                className="border-2 border-black bg-white rounded-xl p-2"
                src="landing imgs/logo 1.png"
                alt="AI Assistant"
              />
              <p className="text-center mt-2">AI Assistant</p>
            </div>
            <div className="flex flex-col items-center font-medium">
              <img 
                className="border-2 border-black bg-white rounded-xl p-2"
                src="landing imgs/icon hirtage 1.png"
                alt="Cultural Heritage"
              />
              <p className="text-center mt-2">Cultural Heritage</p>
            </div>
          </div>

          {/* Desktop Footer */}
          <div className="hidden md:flex justify-center w-full gap-15%">
            <Link href="/">Irth © 2025</Link>
            <Link href="https://www.instagram.com/itech_ucbet">contact</Link>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/5 h-auto relative flex gap-6 items-end">
        <p className={`${inknutAntiqua.variable} font-serif absolute md:static left-10% md:mb-10% text-xl md:text-4xl font-semibold leading-tight text-black text-opacity-20`}>
          "Irth helped<br /> 
          us digitize<br /> our<br />
          grandparent's<br />
          oral<br />
          stories."
        </p>
        <img 
          className="absolute md:relative left-35% top-10% md:scale-80"
          src="landing imgs/Untitled-4 1.png"
          alt="Heritage illustration"
        />
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden flex absolute bottom-0 justify-center w-full gap-15% pb-4">
        <Link href="/">Irth © 2025</Link>
        <Link href="https://www.instagram.com/itech_ucbet">contact</Link>
      </div>
    </div>
  );
};

export default Hero;