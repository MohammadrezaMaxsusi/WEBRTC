"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { Button, Input, Layout } from "@/components/common";
import { pageI18 } from "./page_i18";
import Link from "next/link";

export default function SignIn() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  return (
    <Layout>
      <div className={`${styles["wrapper"]}`}>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
        >
          <div className={styles["form-wrapper"]}>
            <p className={styles["title"]}>
              {pageI18["Sign in to your account"]}
            </p>
            <label htmlFor="email" className={styles["email"]}>
              {pageI18.Email}
              <input id="email" type="email" />
            </label>
            <label htmlFor="password" className={styles["email"]}>
              {pageI18.Password}
              <input id="password" type="password" />
            </label>
            <div className={styles["options"]}>
              <Input
                type="checkbox"
                label={pageI18["Remember me"]}
                checked={checkboxValue}
                onChange={() => setCheckboxValue(!checkboxValue)}
                name="remember"
              />
              <Link href="/forget-password" className={styles["forget"]}>
                {pageI18["Forget password?"]}
              </Link>
            </div>
            <Button
              className={styles["button"]}
              title={pageI18["Sign in"]}
              onClick={() => {}}
            />
          </div>
          <div className={styles["new-user"]}>
            {pageI18["New user?"]}
            <Link href="/auth/sign-up" className={styles["register"]}>
              {pageI18["Register"]}
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
