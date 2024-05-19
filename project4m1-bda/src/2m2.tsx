"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

interface TwoMTwoProps {
  text?: string;
  listText: string[];
  delay: number;
  styles?: string;
  addDelay?: number;
}

const TwoMTwo: React.FC<TwoMTwoProps> = ({
  text,
  listText = [],
  delay,
  styles,
  addDelay = 0,
}) => {
  const seqList: (string | number)[] = [500];
  seqList.push(500 + addDelay);
  for (let i = 0; i < listText.length; i++) {
    seqList.push(text + listText[i]);
    seqList.push(delay);
    // if (i === listText.length - 1) seqList.pop(); // Remove the last delay
  }
  seqList.push(2000);
  return (
    <div className={`${styles}`}>
      <TypeAnimation
        preRenderFirstString={true}
        sequence={seqList}
        speed={50}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TwoMTwo;
