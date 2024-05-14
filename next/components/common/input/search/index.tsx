import React from "react";
import styles from "./index.module.scss";
import Icon from "../../icon";

type Props = {
  containerClassNames: String;
  classNames: String;
  value: string;
  name: string;
  placeholder: string;
  onChange: Function;
  onBlur: Function;
  onFocus: Function;
};

export default function Search(props: Props) {
  const {
    containerClassNames,
    classNames,
    value,
    name,
    placeholder,
    onChange,
    onBlur,
    onFocus,
  } = props;

  return (
    <div className={`${containerClassNames} ${styles["wrapper"]}`}>
      <Icon name="search" />
      <input
        id={name}
        onChange={(e) => onChange && onChange(e.target.name, e.target.value)}
        onBlur={(e) => onBlur && onBlur(e)}
        onFocus={(e) => onFocus && onFocus(e)}
        type="search"
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${classNames} ${styles["input"]}`}
      />
    </div>
  );
}
