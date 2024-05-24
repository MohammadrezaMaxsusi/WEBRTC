import React from "react";
import styles from "./index.module.scss";
import Avatar from "../Avatar";

export default function ConfSidebar() {
  const pages = [0, 0, 0, 0, 0];
  return (
    <div className={styles.wrapper}>
      <Avatar size={55} />
      <div className={styles.pages}>
        {pages.map((page: number, index: number) => (
          <div className={styles.page} key={"page-" + index}></div>
        ))}
      </div>
      <div className={styles.user}>
        <Avatar size={55} />
      </div>
    </div>
  );
}
