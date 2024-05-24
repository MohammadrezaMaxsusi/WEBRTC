import React from "react";
import styles from "./index.module.scss";
import ConfOthers from "../ConfOthers";

export default function ConfParticipantList() {
  const participants = [1, 2, 3, 4, 5];
  return (
    <div className={styles.wrapper}>
      {participants.map((participant: any, index: number) => (
        <div className={styles.participant} key={"participant" + index}></div>
      ))}
      <div
        key={"participant" + participants.length}
        className={styles.participant}
      >
        <ConfOthers />
      </div>
    </div>
  );
}
