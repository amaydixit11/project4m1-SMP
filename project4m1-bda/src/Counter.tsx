"use client";

import React from "react";
import CountUp from "react-countup";

export default function Counter({
  number,
  title,
  classNumber,
  classText,
  duration = 10,
}: any) {
  return (
    <div className={`number flex flex-col justify-center`}>
      <CountUp
        className={`counter ${classNumber}`}
        duration={duration}
        end={number}
      />
      <div className={`text ${classText}`}>{title}</div>
    </div>
  );
}
