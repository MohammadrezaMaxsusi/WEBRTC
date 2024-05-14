import React from "react";
import { IconType } from "./type";

export default function ChevronUp(props: IconType) {
  const { color, size } = props;
  return (
    <svg
      width={size || "11"}
      height={String(Number(size) - 5) || "6"}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65665 0.5L10.6163 5.99463H0.696955L5.65665 0.5Z"
        fill={color || "#61BFB4"}
      />
    </svg>
  );
}
