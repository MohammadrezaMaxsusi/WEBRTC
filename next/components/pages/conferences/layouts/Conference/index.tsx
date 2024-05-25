import React from "react";
import styles from "./index.module.scss";
import { pageI18 } from "../../i18";
import Participants from "@/components/pages/conference/layouts/Participants";

export default function Conference() {
  const participants = 200;
  return (
    <div className={styles.wrapper}>
      <strong className={styles.title}>
        {pageI18["Bachelors in science - Full 2018"]}
      </strong>
      <span className={styles.createdAt}>{pageI18["1 Nov 2024"]}</span>
      <div className={styles.participants}>
        {participants + " "}
        <span>{pageI18["Participants"]}</span>
      </div>
    </div>
  );
}
