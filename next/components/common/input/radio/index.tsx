import React from "react";
import styles from "./index.module.scss";

type Props = {
  name: string;
  value: string;
  checked: boolean;
  label: string;
  onChange: Function;
  id: string;
};

export default function Radio(props: Props) {
  const { value, name, id, label, onChange, checked } = props;

  return (
    <label className={`${styles["container"]}`}>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className={`${styles["checkmark"]}`}></span>
      {label}
    </label>
  );
}
