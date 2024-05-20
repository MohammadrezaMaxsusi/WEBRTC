import React from "react";
import styles from "./index.module.scss";
import { AvatarType } from "./types";
import Icon from "../icon";

export default function Avatar(props: AvatarType) {
  const { size, src } = props;
  return (
    <div className={styles.wrapper} style={{ width: size, height: size }}>
      {src ? (
        <img src={src} className={styles.profileImage} />
      ) : (
        <Icon name="user" size="20" />
      )}
    </div>
  );
}
