import React from "react";
import styles from "./index.module.scss";
import { MessageType } from "@/components/pages/conference/types";
import Avatar from "../Avatar";

export default function Message(props: MessageType) {
  const { value, isSelf } = props;
  return (
    <div className={`${isSelf ? styles.isSelf : styles.wrapper}`}>
      <div className={styles.userInfo}>
        <Avatar size={36} />
        <strong className={styles.username}>{isSelf ? "Me" : "Hossein"}</strong>
      </div>
      <p className={styles.message}>{value}</p>
    </div>
  );
}
