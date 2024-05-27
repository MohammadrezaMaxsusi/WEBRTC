import React from "react";
import styles from "./index.module.scss";
import { pageI18 } from "../../i18";

interface GetMeetingDateType {
  active: boolean;
  date: string;
  setDate: Function;
}

export default function GetMeetingDate(props: GetMeetingDateType) {
  const { active, date, setDate } = props;
  return (
    <div className={styles.wrapper}>
      {active ? (
        <>
          <h1 className={styles.title}>{pageI18["Meeting date"]}</h1>
          <p className={styles.description}>
            {pageI18["Please enter your meeting date"]}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </form>
        </>
      ) : null}
    </div>
  );
}
