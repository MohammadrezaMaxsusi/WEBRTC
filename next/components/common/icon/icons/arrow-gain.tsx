import React from "react";
import { IconType } from "./type";

export default function ArrowGain(props: IconType) {
  const { color, size } = props;
  return (
    <svg
      width={size || "10"}
      height={String(Number(size) - 4) || "6"}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.04004 0.544922L9.80318 5.72327L0.276899 5.72327L5.04004 0.544922Z"
        fill={color || "#61BFB4"}
      />
    </svg>
  );
}
