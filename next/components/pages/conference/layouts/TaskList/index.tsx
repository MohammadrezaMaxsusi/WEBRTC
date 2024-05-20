import React, { useState } from "react";
import styles from "./index.module.scss";
import { pageI18 } from "../../i18";
import { ConfTask } from "@/components/common";

export default function TaskList() {
  const [tasks, setTasks] = useState([1, 2, 3]);

  return tasks.length ? (
    <div className={styles.wrapper}>
      <p className={styles.title}>{pageI18["Meeting Task List"]}</p>
      <ul className={styles.tasks}>
        {tasks.map((task: any, index: number) => (
          <ConfTask task={task} key={"task" + index} />
        ))}
      </ul>
    </div>
  ) : null;
}
