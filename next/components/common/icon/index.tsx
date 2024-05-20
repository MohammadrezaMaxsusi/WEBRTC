// @ts-nocheck
import React from "react";

import { Icons } from "./icons";

type IconComponentType = {
  color?: string;
  name: string;
  size?: string;
};

export default function Icon(props: IconComponentType) {
  const { name, color, size } = props;
  const iconsMap = {
    user: <Icons.User {...props} />,
    tick: <Icons.Tick {...props} />,
    exit: <Icons.Exit {...props} />,
  };
  return <p style={{width:size,height:"auto",display:"flex"}}>{iconsMap[name]}</p>;
}
