import { Layout, ConfSidebar, Icon } from "@/components/common";
import styles from "./index.module.scss";
import Header from "./layouts/Header";
import Conference from "./layouts/Conference";

export default function Conferences() {
  const confs = [0, 1, 2, 3];
  return (
    <Layout>
      <div className={styles.wrapper}>
        <ConfSidebar />
        <div className={styles.main}>
          <Header />
          <div className={styles.list}>
            {confs.map((conf: any, index: number) => (
              <Conference key={"conf-" + index} />
            ))}
            <div className={styles.add} key={"conf-" + confs.length}>
              <Icon name="plus-filled" size="90" color="rgb(225,225,225)" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
