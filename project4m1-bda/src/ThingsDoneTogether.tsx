"use client";

import React from "react";

import "./styles/tdt-card.css";

interface TTDCardProps {
  front?: string;
  back?: number;
  styles?: string;
}

const TTDCard: React.FC<TTDCardProps> = ({ front, back, styles }) => {
  return (
    <div className={`tdt-card m-4 ${styles}`}>
      <div className="tdt-content">
        <div className="tdt-back">
          <div className="tdt-back-content">
            <strong>{front}</strong>
          </div>
        </div>
        <div className="tdt-front">
          <div className="tdt-img">
            <div className="tdt-circle"></div>
            <div className="tdt-circle" id="tdt-right"></div>
            <div className="tdt-circle" id="tdt-bottom"></div>
          </div>

          <div className="tdt-front-content flex flex-row justify-center items-center place-center">
            {/* <br /> */}
            <strong className="tdt-badge text-6xl">{back}</strong>
            {/* <div className="tdt-description">
              <div className="tdt-title">
                <p className="tdt-title">
                  <strong>Spaguetti Bolognese</strong>
                </p>
              </div>
              <p className="tdt-card-footer">
                30 Mins &nbsp; | &nbsp; 1 Serving
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const ThingsDoneTogether = () => {
  const items = new Map<string, number>([
    ["This is a card1", 36],
    ["This is a card2", 57],
    ["This is a card3", 83],
    ["This is a card4", 75],
    ["This is a card5", 86],
    ["This is a card6", 6],
    ["This is a card7", 68],
    ["This is a card8", 11],
    ["This is a card9", 1823],
  ]);

  return (
    <div className="grid grid-cols-2 w-screen h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-start p-10">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          These are just{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600">
            Cards
          </span>
          <p className="text-3xl m-4">Hover Over the cards here</p>
          <p className="text-3xl m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero
            provident nisi ducimus similique ratione ipsum recusandae, rerum ad
            facere.
          </p>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4 p-10 overflow-hidden">
        {Array.from(items.entries()).map(([key, value], index) => (
          <TTDCard key={index} front={key} back={value} />
        ))}
      </div>

      {/* {[...Array(items.size)].map((_, i) => {
        return <TTDCard front={items.forEach} />;
      })} */}
      {/* {[...Array(items.length)].map((_, i) => {
        return (
          <NavbarItem
            text={items[i]}
            onClick={() => handleClick(i)}
            active={i === active}
            key={i}
            index={i}
          />
        );
      })} */}
    </div>
  );
};

export default ThingsDoneTogether;
