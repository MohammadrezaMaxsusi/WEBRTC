import React, { useState } from "react";
import styles from "./index.module.scss";
import { pageI18 } from "../../i18";
import ChatTextField from "@/components/common/ChatTexField";
import { Message } from "@/components/common";

export default function ChatRoom() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const messages = [
    "Hi amir",
    "Hi",
    "Hi amir",
    "Hi",
    "Hi amir",
    "Hi",
    "Hi",
    "Hi amir",
    "Hi",
    "Hi",
    "Hi amir",
    "Hi",
    "Hi",
    "Hi amir",
    "Hi",
  ];

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{pageI18["Chat Room"]}</p>
      <div className={styles.chatHistory}>
        {messages.map((message: string, index: number) => (
          <Message
            value={message}
            isSelf={index === 1}
            key={"message" + index}
          />
        ))}
      </div>
      <ChatTextField
        value={textFieldValue}
        onChange={(val: string) => setTextFieldValue(val)}
        onSubmit={() => {}}
      />
    </div>
  );
}
