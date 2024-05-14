import React from "react";
import styles from "./index.module.scss";

export default function TextField(props: any) {
  const {
    classNames,
    labelTitle,
    value,
    name,
    guide,
    placeholder,
    onChange,
    onBlur,
    onFocus,
    maxLength,
    inputMode,
    icon,
    disabled,
    type,
  } = props;

  return (
    <div className={`${styles["wrapper"]}`}>
      {labelTitle ? (
        <label className={`${styles["label"]}`} htmlFor={name}>
          {labelTitle}
        </label>
      ) : null}
      <div className={styles["input-container"]}>
        <input
          id={name}
          onChange={(e) => onChange && onChange(e.target.name, e.target.value)}
          onBlur={(e) => onBlur && onBlur(e)}
          onFocus={(e) => onFocus && onFocus(e)}
          type={type}
          name={name}
          inputMode={inputMode}
          maxLength={maxLength}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          className={`${classNames} ${styles["input"]}`}
        />
        <div className={styles['input-icon']}>{icon}</div>
      </div>
      {guide ? (
        <div className={`${guide?.classNames} ${styles["guide-wrapper"]}`}>
          {guide?.icon}
          <span>{guide?.text}</span>
        </div>  
      ) : null}
    </div>
  );
}
