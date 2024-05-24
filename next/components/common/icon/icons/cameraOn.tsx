import React from "react";
import { IconType } from "./type";

export default function CameraOn(props: IconType) {
  const { color, size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-video"
    >
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect
        x="1"
        y="5"
        width={size || "15" + "px"}
        height={size ? Number(size) - 1 + "px" : "14px"}
        rx="2"
        ry="2"
      ></rect>
    </svg>
  );
}