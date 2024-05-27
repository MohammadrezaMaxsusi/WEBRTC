import { Layout, ConfSidebar, Icon } from "@/components/common";
import styles from "./index.module.scss";
import { useState } from "react";
import GetMeetingDate from "./steps/getMeetingDate";
import GetMeetingName from "./steps/getMeetingName";

export default function CreateConference() {
  const [page, setPage] = useState("getName");
  const railTransforms = {
    getName: styles.getName,
    getOptions: styles.getOptions,
  };
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={`${styles.rail} ${railTransforms[page]}`}>
          <GetMeetingName active={page === "getName"} />
          <GetMeetingDate active={page === "getOptions"} />
        </div>
        <div
          className={styles.actionButtons}
          onClick={() => setPage("getOptions")}
        ></div>
      </div>
    </Layout>
  );
}
