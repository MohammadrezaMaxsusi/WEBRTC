import React from "react";
import styles from "./index.module.scss";
import Avatar from "../Avatar";
import Link from "next/link";

export default function ConfSidebar() {
  const pages = ["conferences", "conference", "", "", ""];
  return (
    <div className={styles.wrapper}>
      <Avatar size={55} />
      <div className={styles.pages}>
        {pages.map((page: string, index: number) => (
          <Link href={"/" + page} className={styles.page} key={"page-" + index}>
            {page}
          </Link>
        ))}
      </div>
      <div className={styles.user}>
        <Avatar size={55} />
      </div>
    </div>
  );
}
