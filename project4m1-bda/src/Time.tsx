"use client";

import React from "react";
import { useEffect, useState } from "react";
import Counter from "./Counter.tsx";
import "./styles/time-cards.css";
// import "../styles/time-container.css";
import TwoMTwo from "./2m2.tsx";

const Time = () => {
  const [time, setTime] = useState([0, 0, 0, 0, 0, 0]);
  const [hover, setHover] = useState(false);
  const fTime = ["Months", "Days", "Hours", "Minutes", "Seconds"];

  function handleTime() {
    const d = new Date(2024, 0, 20, 0, 19, 43).getTime();
    const e = new Date().getTime();
    const f = e - d;
    const sec = Math.floor(f / 1000) % 60;
    const min = Math.floor(f / (1000 * 60)) % 60;
    const hr = Math.floor(f / (1000 * 60 * 60)) % 24;
    const day = Math.floor(f / (1000 * 60 * 60 * 24));
    const month = Math.floor(day / 30);
    const year = Math.floor(month / 12);
    setTime([year, month, day % 30, hr, min, sec]);
  }

  function handleHover() {
    setHover(() => !hover);
  }

  useEffect(() => handleTime, [hover]);

  const list: string[] = [
    "I am a web developer",
    "I am a programmer",
    "I am a blockchain developer",
    "I am amay dixit",
    "I am wondering if i have anything else to write",
  ];
  return (
    <div
      className="container grid grid-cols-5 mx-10 justify-center items-center"
      // border border-[#ADB7BE]
      onMouseOver={handleHover}
    >
      <div className="z-10 text-white mb-10 text-2xl sm:text-2xl lg:text-2xl lg:leading-normal font-extrabold col-span-5 justify-center items-center">
        <div className="z-10 main text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600 justify-center items-center">
          <TwoMTwo text="" delay={1000} styles="" listText={list} />
          <br />
          <br />
        </div>
      </div>
      {[...Array(fTime.length)].map((_, i) => {
        return (
          <div className="card m-10 mb-20">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner flex flex-row justify-center items-center">
              <Counter
                classNumber="text-9xl font-extrabold text-gray-900 dark:text-white"
                classText="text-4xl font-extrabold text-gray-900 dark:text-white"
                title={fTime[i]}
                number={time[i + 1]}
                key={i}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Time;
