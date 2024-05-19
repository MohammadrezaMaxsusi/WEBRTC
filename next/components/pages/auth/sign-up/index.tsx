"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { Button, Input, Layout } from "@/components/common";
import { pageI18 } from "./i18";

export default function SignUp() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  return (
    <Layout>
      <div className={`${styles["wrapper"]}`}>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          <p className={styles["title"]}>{pageI18["Register"]}</p>
          <label
            htmlFor="firstName"
            className={styles["email"] + " " + styles["email-fa"]}
          >
            {pageI18["First name"]}
            <input id="firstName" type="text" />
          </label>
          <label
            htmlFor="lastName"
            className={styles["email"] + " " + styles["email-fa"]}
          >
            {pageI18["Last name"]}
            <input id="lastName" type="text" />
          </label>
          <label htmlFor="email" className={styles["email"]}>
            {pageI18.Email}
            <input id="email" type="email" />
          </label>
          <label htmlFor="password" className={styles["email"]}>
            {pageI18.Password}
            <input id="password" type="password" />
          </label>
          <label htmlFor="confirmPassword" className={styles["email"]}>
            {pageI18["Confirm password"]}
            <input id="confirmPassword" type="password" />
          </label>
          <Button
            className={styles["button"]}
            title={pageI18["Register"]}
            onClick={() => {}}
          />
        </form>
      </div>
    </Layout>
  );
}
