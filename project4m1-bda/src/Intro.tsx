"use client";

import React from "react";

const CustomButton = () => {
  return (
    <div className="w-full h-40 flex items-center justify-center cursor-pointer">
      <div className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-pink-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-pink-600 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-pink-400"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className="w-5 h-5 text-pink-400"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
          Click me!!
        </span>
      </div>
    </div>
  );
};
const Intro = () => {
  return (
    <div className="h-screen">
      <div className="container grid grid-cols-4">
        <div className="text mx-10 col-span-2">
          <div className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <div className="main text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600">
              Welcome User!!!
              {/* I AM AMAY DIXIT */}
            </div>{" "}
          </div>
          <div className="subtext text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my website <br />
            This is just a test website Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Maiores libero alias illo cum odio necessitatibus
            aliquam ducimus vel vero possimus.
          </div>
        </div>

        <div className="image col-span-2">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="picture"
            className="image "
          ></img>
        </div>
      </div>

      <div className="pt-36">
        <CustomButton />
      </div>
    </div>
  );
};

export default Intro;
