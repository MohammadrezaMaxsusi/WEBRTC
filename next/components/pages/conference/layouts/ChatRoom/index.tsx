import React from "react";
import styles from "./index.module.scss";
import { pageI18 } from "../../i18";

export default function ChatRoom() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{pageI18["Chat Room"]}</p>
    </div>
  );
}
