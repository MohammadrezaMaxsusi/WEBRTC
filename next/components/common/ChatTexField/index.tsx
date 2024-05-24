import React, { useState } from "react";
import styles from "./index.module.scss";
import MultilineTextInput from "@commercetools-uikit/multiline-text-input";
import { ChatTextFieldType } from "@/components/pages/conference/types";
import Button from "../button";
import { pageI18 } from "@/components/pages/conference/i18";

export default function ChatTextField(props: ChatTextFieldType) {
  const { value, onChange, onSubmit } = props;
  return (
    <div className={styles.wrapper}>
      <MultilineTextInput
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={pageI18["Type a message"]}
      />
      <Button
        title={""}
        onClick={() => {}}
        className={`${styles.submit}`}
      >
        {/* <Icon name="tick" size="14" color="yellow" /> */}
      </Button>
    </div>
  );
}
