//@ts-nocheck
import { useEffect, useState } from "react";
import _ from "lodash";

export const useScrollPosition = () => {
  if (typeof window === "undefined") return 0;

  const wait = 300;
  let throttleTimeout = null;

  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  const callBack = (e) => {
    const className = _.get(e, "target.className", "");
    if (!className.includes("scrolling-wrapper")) {
      setScrollPos(e.srcElement.scrollTop);
    }

    throttleTimeout = null;
  };

  const onScroll = (e) => {
    if (wait) {
      if (throttleTimeout === null) {
        throttleTimeout = setTimeout(() => callBack(e), wait);
      }
    } else {
      callBack(e);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
    };
  });

  return scrollPos;
};
