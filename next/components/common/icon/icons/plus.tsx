import React from "react";
import { IconType } from "./type";

export default function Plus(props: IconType) {
  const { color, size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width={(size || 24) + "px"}
      height={(size || 24) + "px"}
    >
      <g
        fill={color || "rgb(97, 191, 180)"}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.523 4.477,10 10,10c5.523,0 10,-4.477 10,-10c0,-5.523 -4.477,-10 -10,-10zM17,13h-4v4h-2v-4h-4v-2h4v-4h2v4h4z"></path>
        </g>
      </g>
    </svg>
  );
}
