import React from "react";
import styles from "./index.module.scss";
import { pageI18 } from "../../i18";

interface GetMeetingNameType {
  active: boolean;
  name?: string;
  setName: Function;
}

export default function GetMeetingName(props: GetMeetingNameType) {
  const { active, name, setName } = props;
  return (
    <div className={styles.wrapper}>
      {active ? (
        <>
          <h1 className={styles.title}>{pageI18["Meeting name"]}</h1>
          <p className={styles.description}>
            {pageI18["Please enter your meeting name"]}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </>
      ) : null}
    </div>
  );
}
