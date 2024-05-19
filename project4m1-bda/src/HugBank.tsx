"use client";

import React from "react";
import { useState } from "react";
import "./styles/hug-bank.css";

const HugBank = () => {
  // const time = 1;
  const d = new Date(2024, 4, 1, 0, 0, 0).getTime();
  const e = new Date().getTime();
  const f = e - d;
  const days = Math.floor(f / 86400000);
  const final = Math.floor(1.1 ** days);

  const [amt, setAmt] = useState(final);

  function handleClick() {
    setAmt((amt) => amt + 1);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-start p-10">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-600">
            Welcome to Bank
          </span>
          <p className="text-2xl m-4">
            10 Percent Compound interest on 1 rs as Principal amount in {days}{" "}
            days is
          </p>
        </h1>
      </div>
      <div className="walletBalanceCard ml-36 flex justify-between">
        <div className="svgwrapper">
          <svg
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.539915"
              y="6.28937"
              width="21"
              height="4"
              rx="1.5"
              transform="rotate(-4.77865 0.539915 6.28937)"
              fill="#7D6B9D"
              stroke="black"
            ></rect>
            <circle
              cx="11.5"
              cy="5.5"
              r="4.5"
              fill="#E7E037"
              stroke="#F9FD50"
              stroke-width="2"
            ></circle>
            <path
              d="M2.12011 6.64507C7.75028 6.98651 12.7643 6.94947 21.935 6.58499C22.789 6.55105 23.5 7.23329 23.5 8.08585V24C23.5 24.8284 22.8284 25.5 22 25.5H2C1.17157 25.5 0.5 24.8284 0.5 24V8.15475C0.5 7.2846 1.24157 6.59179 2.12011 6.64507Z"
              fill="#BF8AEB"
              stroke="black"
            ></path>
            <path
              d="M16 13.5H23.5V18.5H16C14.6193 18.5 13.5 17.3807 13.5 16C13.5 14.6193 14.6193 13.5 16 13.5Z"
              fill="#BF8AEB"
              stroke="black"
            ></path>
          </svg>
        </div>

        <div className="balancewrapper absolute left-1/3 w-screen">
          <span className="balanceHeading w-screen">Bank Wallet balance</span>
          <p className="balance w-screen">
            <span id="currency"> {amt} rs</span>
          </p>
        </div>

        <button className="addmoney absolute right-48" onClick={handleClick}>
          <span className="plussign">+</span>Add Money
        </button>
      </div>
    </div>
  );
};

export default HugBank;
