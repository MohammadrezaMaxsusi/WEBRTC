import React from "react";
import styles from "./index.module.scss";

export default function ConfOthers() {
  const others = [1, 2, 3, 4, 5];
  return (
    <div className={styles.wrapper}>
      {/* switch bottom Divs with Video tag */}
      <div className={styles.participant}></div>
      <div className={styles.participant}></div>
      <div className={styles.participant}></div>
      <div className={styles.participant}></div>
    </div>
  );
}