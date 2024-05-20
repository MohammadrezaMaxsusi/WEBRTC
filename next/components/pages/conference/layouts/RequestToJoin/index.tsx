import React, { useState } from "react";
import styles from "./index.module.scss";
import { pageI18 } from "../../i18";
import ConfRequestToJoin from "@/components/common/ConfRequestToJoin";

export default function RequestToJoin() {
  const [users, setUsers] = useState([1, 2, 3]);
  return users.length ? (
    <div className={styles.wrapper}>
      <p className={styles.title}>{pageI18["Request to join"]}</p>
      <ul className={styles.users}>
        {users.map((user: any, index: number) => (
          <ConfRequestToJoin user={user} key={"Request" + index} />
        ))}
      </ul>
    </div>
  ) : null;
}
