// @ts-nocheck
import React from "react";

import { Icons } from "./icons";
import {width} from "@mui/system";

type IconComponentType = {
  color?: string;
  name: string;
  size?: string;
};

export default function Icon(props: IconComponentType) {
  const { name, color, size } = props;
  const iconsMap = {
    warning: <Icons.Warning {...props} />,
    exit: <Icons.Exit {...props} />,
    more: <Icons.More {...props} />,
    "wallet-outline": <Icons.WalletOutline {...props} />,
    setting: <Icons.Setting {...props} />,
    bell: <Icons.Bell {...props} />,
    user: <Icons.User {...props} />,
    dashboard: <Icons.Dashboard {...props} />,
    bcard: <Icons.BCard {...props} />,
    chart: <Icons.Chart {...props} />,
    history: <Icons.History {...props} />,
    friends: <Icons.Friends {...props} />,
    "chevron-up": <Icons.ChevronUp {...props} />,
    "account-management": <Icons.AccountManagement {...props} />,
    trash: <Icons.Trash {...props} />,
    "star-fill": <Icons.StarFill {...props} />,
    plus: <Icons.Plus {...props} />,
    menu: <Icons.Menu {...props} />,
    export: <Icons.Export {...props} />,
    import: <Icons.Import {...props} />,
    eye: <Icons.Eye {...props} />,
    search: <Icons.Search {...props} />,
    "arrow-gain": <Icons.ArrowGain {...props} />,
    "info": <Icons.Info {...props} />,
    "tick": <Icons.Tick {...props} />,
    "close-filled": <Icons.CloseFilled {...props} />,
    "chevron": <Icons.ChevronRight {...props} />,
    "copy-icon": <Icons.CopyIcon {...props} />,
    "arrow": <Icons.Arrow {...props} />,
    "transaction": <Icons.Transaction {...props} />,
    "logout": <Icons.Logout {...props} />,
  };
  return <p style={{width:size,height:"auto",display:"flex"}}>{iconsMap[name]}</p>;
}
