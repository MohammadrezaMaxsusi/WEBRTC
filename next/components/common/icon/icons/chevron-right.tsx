import React from "react";
import { IconType } from "./type";

export default function ChevronRight(props: IconType) {
  const { size, color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "9" + "px"}
      height={(String(Number(size) + 7) || "16") + "px"}
      viewBox="0 0 9 16"
      fill="none"
    >
      <path
        d="M8.70714 8.70711C9.09766 8.31658 9.09766 7.68342 8.70714 7.29289L2.34318 0.928932C1.95265 0.538408 1.31949 0.538408 0.928962 0.928932C0.538438 1.31946 0.538438 1.95262 0.928962 2.34315L6.58582 8L0.928962 13.6569C0.538438 14.0474 0.538438 14.6805 0.928962 15.0711C1.31949 15.4616 1.95265 15.4616 2.34318 15.0711L8.70714 8.70711ZM7 9H8.00003V7H7V9Z"
        fill={color || "#3A416F"}
      />
    </svg>
  );
}
