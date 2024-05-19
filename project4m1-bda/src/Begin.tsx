"use client";

import React from "react";
import "./styles/begin.css";

const Begin = () => {
  return (
    <div className="love">
      <input id="switch" type="checkbox" />
      <label className="love-heart" htmlFor="switch">
        <i className="left"></i>
        <i className="right"></i>
        <i className="bottom"></i>
        <div className="round"></div>
      </label>
    </div>
  );
};

export default Begin;
