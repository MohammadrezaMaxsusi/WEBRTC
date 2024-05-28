import { Layout, ConfSidebar, Icon } from "@/components/common";
import styles from "./index.module.scss";

export default function UpdateConference() {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <ConfSidebar />
        <div className={styles.main}></div>
      </div>
    </Layout>
  );
}
