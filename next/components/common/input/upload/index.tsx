import React from "react";
import styles from "./index.module.scss";
import Icon from "../../icon";
import { toast } from "react-toastify";

type Props = {
  label?: string;
  onChange: Function;
  classNames?: string;
  validFileTypes?: Array<string>;
};

export default function Upload(props: Props) {
  const { label, onChange, classNames, validFileTypes } = props;
  return (
    <div className={`${classNames} ${styles["wrapper"]}`}>
      <input
        onChange={(e: any) => {
          const file = e.target.files[0];
          const validExtensions = validFileTypes?.length
            ? validFileTypes
            : ["image/jpeg", "image/jpg", "image/png", "image/webp"];
          if (validExtensions.includes(file?.type)) {
            onChange(file);
          } else {
            toast.error("فرمت فایل انتخابی قابل پذیرش نیست.");
          }
        }}
        type="file"
        className={`${classNames} ${styles["input"]}`}
      />
      <div className={styles["label-wrapper"]}>
        <span>{label}</span>
        <Icon name="plus" size="34" />
      </div>
    </div>
  );
}
