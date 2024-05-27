import React from "react";
import styles from "./index.module.scss";

interface GetMeetingDateType {
  active: boolean;
}

export default function GetMeetingDate(props: GetMeetingDateType) {
  const { active } = props;
  return <div className={styles.wrapper}>{active ? <></> : null}</div>;
}
