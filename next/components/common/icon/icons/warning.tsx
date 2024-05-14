import React from "react";
import { IconType } from "./type";

export default function Warning(props: IconType) {
  const { color } = props;
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_121_1437)">
        <path
          d="M9.46332 3.70756L2.40499 15.4909C2.25946 15.7429 2.18246 16.0286 2.18165 16.3197C2.18083 16.6107 2.25623 16.8968 2.40035 17.1497C2.54446 17.4025 2.75226 17.6132 3.00308 17.7608C3.2539 17.9084 3.53899 17.9877 3.82999 17.9909H17.9467C18.2377 17.9877 18.5227 17.9084 18.7736 17.7608C19.0244 17.6132 19.2322 17.4025 19.3763 17.1497C19.5204 16.8968 19.5958 16.6107 19.595 16.3197C19.5942 16.0286 19.5172 15.7429 19.3717 15.4909L12.3133 3.70756C12.1648 3.46265 11.9556 3.26016 11.706 3.11963C11.4564 2.9791 11.1748 2.90527 10.8883 2.90527C10.6019 2.90527 10.3203 2.9791 10.0707 3.11963C9.82105 3.26016 9.61188 3.46265 9.46332 3.70756V3.70756Z"
          stroke={color || "#F45C29"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8887 7.99072V11.3241"
          stroke={color || "#F45C29"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8887 14.6572H10.897"
          stroke={color || "#F45C29"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_121_1437">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.888672 0.490723)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
