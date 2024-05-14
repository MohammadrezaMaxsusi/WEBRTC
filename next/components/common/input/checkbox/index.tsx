import React from "react";
import styles from "./index.module.scss";

type Props = {
  name: string;
  checked: boolean;
  onChange: Function;
  label: string;
}

export default function Checkbox(props: Props) {
  const { name, checked, onChange, label } = props;
  return (
    <label className={styles["container"]}>
      <input
        type="checkbox"
        checked={checked}
        onClick={(e) => onChange()}
        name={name}
      />
      <span className={styles["checkmark"]}></span>
      {label}
    </label>
  );
}
