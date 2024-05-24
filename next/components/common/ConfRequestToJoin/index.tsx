import React from "react";
import styles from "./index.module.scss";
import { ConfRequestToJoinType } from "@/components/pages/conference/types";
import Avatar from "../Avatar";
import { pageI18 } from "@/components/pages/conference/i18";
import { Button, Icon } from "../index";

export default function ConfRequestToJoin(props: ConfRequestToJoinType) {
  const { user } = props;
  return (
    <li className={styles.wrapper}>
      <div className={styles.userInfo}>
        <Avatar size={35} />
        <span className={styles.username}>
          {user?.username || pageI18["Unknown"]}
        </span>
      </div>
      <div className={styles.actions}>
        <Button
          title={""}
          onClick={() => {}}
          className={`${styles.action} ${styles.accept}`}
        >
          {/* <Icon name="tick" size="14" color="yellow" /> */}
        </Button>
        <Button
          title={""}
          onClick={() => {}}
          className={`${styles.action} ${styles.reject}`}
        >
          <Icon name="exit" size="14" color="#fff" />
        </Button>
      </div>
    </li>
  );
}
