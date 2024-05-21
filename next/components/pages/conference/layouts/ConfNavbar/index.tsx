import React from "react";
import styles from "./index.module.scss";
import { Button, Icon } from "@/components/common";
import { pageI18 } from "../../i18";

export default function ConfNavbar() {
  const participants = 19;
  return (
    <div className={styles.wrapper}>
      <div className={styles.leading}>
        <Button title={""} onClick={() => {}} className={`${styles.back}`}>
          <div className={styles.arrow}>
            <Icon name="arrow" size="16" color="#000" />
          </div>
        </Button>
        <div className={styles.info}>
          <strong className={styles.title}>{pageI18["Weekly Meeting"]}</strong>
          <span
            className={styles.count}
          >{`${participants} ${pageI18["Participants"]}`}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Button
          title={pageI18["Leave Meeting"]}
          onClick={() => {}}
          className={`${styles.leave}`}
        >
          <Icon name="logout" size="40" color="rgb(243, 82, 90)" />
        </Button>
      </div>
    </div>
  );
}
