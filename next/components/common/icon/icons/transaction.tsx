import React from "react";
import { IconType } from "./type";

export default function Transaction(props: IconType) {
  const { color, size } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "17"}
      height={size || "17"}
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M14.75 1H2.25C1.91848 1 1.60054 1.1317 1.36612 1.36612C1.1317 1.60054 1 1.91848 1 2.25V14.75C1 15.0815 1.1317 15.3995 1.36612 15.6339C1.60054 15.8683 1.91848 16 2.25 16H14.75C15.0815 16 15.3995 15.8683 15.6339 15.6339C15.8683 15.3995 16 15.0815 16 14.75V2.25C16 1.91848 15.8683 1.60054 15.6339 1.36612C15.3995 1.1317 15.0815 1 14.75 1Z"
        stroke={color || "#3A416F"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.2487 11.4167L9.33203 13.0833L12.6654 8.91667M4.33203 4.75H12.6654M4.33203 8.08333H7.66536"
        stroke={color || "#3A416F"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
