"use client";

import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [
    {
      title: "May 1940",
      cardTitlee: "hi",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
    {
      title: "May 1940",
      cardTitlee:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt.",
    },
  ];

  return (
    <div className="m-10">
      <div className="flex flex-col justify-center items-start p-10">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600">
            A Timeline of Events{" "}
          </span>
          <span className="text-2xl">(Don't really have content for this)</span>
        </h1>
      </div>
      <Chrono
        disableToolbar
        mode="VERTICAL_ALTERNATING"
        items={items}
        fontSizes={{
          title: "2rem",
        }}
        theme={{
          primary: "white",
          secondary: "#f17591",
          cardBgColor: "pink",
          titleColor: "white",
          titleColorActive: "white",
        }}
      >
        {[...Array(items.length)].map((_, i) => {
          return (
            <div className="flex flex-col justify-center items-start">
              <h1 className="font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600">
                  {items[i].cardTitlee}
                </span>
              </h1>
            </div>
          );
        })}
      </Chrono>
    </div>
  );
};

export default Timeline;
