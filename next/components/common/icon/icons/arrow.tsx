import React from "react";
import { IconType } from "./type";

export default function Arrow(props: IconType) {
  const { color, size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size || "12") + "px"}
      height={(Number(size) + 7 || "19") + "px"}
      viewBox="0 0 12 19"
      fill="none"
    >
      <path
        d="M5.30115 18.6646C5.59404 18.9575 6.06892 18.9575 6.36181 18.6646L11.1348 13.8917C11.4277 13.5988 11.4277 13.1239 11.1348 12.831C10.8419 12.5381 10.367 12.5381 10.0741 12.831L5.83149 17.0736L1.58886 12.831C1.29597 12.5381 0.821097 12.5381 0.528203 12.831C0.235308 13.1238 0.235306 13.5987 0.528199 13.8916L5.30115 18.6646ZM5.08155 0.634156L5.08148 18.1343L6.58148 18.1343L6.58155 0.634162L5.08155 0.634156Z"
        fill={color || "#FA3434"}
      />
    </svg>
  );
}
