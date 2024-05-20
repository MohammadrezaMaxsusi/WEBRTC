import React from "react";
import styles from "./index.module.scss";
import Input from "../input";
import { pageI18 } from "@/components/pages/conference/i18";
import { ConfTaskType } from "@/components/pages/conference/types";

export default function ConfTask(props: ConfTaskType) {
  return (
    <li className={styles.wrapper}>
      <Input
        type="checkbox"
        label={pageI18["Meeting Task List"]}
        checked={false}
        onChange={() => {}}
        name="task"
      />
    </li>
  );
}
