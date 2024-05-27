import React from "react";
import styles from "./index.module.scss";

interface GetMeetingNameType {
  active: boolean;
}

export default function GetMeetingName(props: GetMeetingNameType) {
  const { active } = props;
  return <div className={styles.wrapper}>{active ? <></> : null}</div>;
}
