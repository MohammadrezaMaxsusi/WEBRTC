import { Button, Layout } from "@/components/common";
import styles from "./index.module.scss";
import { useState } from "react";
import GetMeetingDate from "./steps/getMeetingDate";
import GetMeetingName from "./steps/getMeetingName";
import { pageI18 } from "./i18";

export default function CreateConference() {
  const [page, setPage] = useState("getName");
  const [formBody, setFormBody] = useState({
    name: "",
    date: "",
  });
  const railTransforms = {
    getName: styles.getName,
    getDate: styles.getDate,
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div
          className={`${styles.rail} ${railTransforms[page as keyof Object]}`}
        >
          <GetMeetingName
            active={page === "getName"}
            name={formBody.name}
            setName={(val: string) => setFormBody({ ...formBody, name: val })}
          />
          <GetMeetingDate
            date={formBody.date}
            setDate={(val: string) => setFormBody({ ...formBody, date: val })}
            active={page === "getDate"}
          />
        </div>
        <div className={styles.actionButtons}>
          <Button
            className={styles.next}
            title={pageI18["Next"]}
            onClick={() => setPage("getDate")}
          />
          <Button
            className={styles.prev}
            title={pageI18["Prev"]}
            onClick={() => setPage("getName")}
          />
        </div>
      </div>
    </Layout>
  );
}
