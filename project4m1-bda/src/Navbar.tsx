"use client";

import React from "react";
import { useState, useEffect } from "react";

const NavbarItem = (props: any) => {
  const [clr, setClr] = useState("blue-500");
  const [weight, setWeight] = useState("normal");
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (props.active) {
      setClr("gray-300");
      setWeight("bold");
      setTransition(true);
    } else {
      setClr("blue-500");
      setWeight("normal");
    }
  }, [props.active]);

  const style = {
    transition: transition ? "background-color 0.5s ease-in-out" : "none",
  };

  return (
    <button
      className={`navbar-item rounded-full bg-${clr} text-black m-2 p-2 font-${weight}`}
      onClick={() => {
        props.onClick();
      }}
      style={style}
    >
      {props.text}
    </button>
  );
};

const Navbar = () => {
  const items = ["Home", "Timeline", "Projects", "About us", "Contact"];
  const [active, setActive]: any = useState(null);

  function handleClick(i: number) {
    console.log("clicked");
    setActive(i);
  }

  return (
    <div className="flex flex-row justify-center sticky top-0 m-5 bg-transparent p-1 overflow-auto h-16 z-[100]">
      <div className="navbar flex flex-row items-center justify-center bg-white rounded-full">
        {[...Array(items.length)].map((_, i) => {
          return (
            <NavbarItem
              text={items[i]}
              onClick={() => handleClick(i)}
              active={i === active}
              key={i}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
