import React from "react";
import styles from "./index.module.scss";
import Button from "../button";
import Icon from "../icon";

export default function ConfMainView() {
  const participants = [1, 2, 3];
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>
      {/* <div className={styles.reactions}>
        {[1, 2, 3].map((item: number, index: number) => (
          <Button
            key={"action" + index}
            title={""}
            onClick={() => {}}
            className={`${styles.reaction}`}
          ></Button>
        ))}
      </div> */}
      {/* <div className={styles.footer}>
        <Button
          title={""}
          onClick={() => {}}
          className={`${styles.endCall}`}
        ></Button>
        <Button
          title={""}
          onClick={() => {}}
          className={`${styles.option}`}
        ></Button>
        <Button
          title={""}
          onClick={() => {}}
          className={`${styles.option}`}
        ></Button>
      </div> */}
      {/* {participants.length <= 3 ? (
        <div className={styles.participants}>
          {participants.map((item: number, index: number) => (
            <div
              key={"participant" + index}
              className={styles.participant}
            ></div>
          ))}
        </div>
      ) : null} */}
    </div>
  );
}
