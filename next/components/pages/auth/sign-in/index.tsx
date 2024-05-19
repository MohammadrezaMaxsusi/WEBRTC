"use client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { Button, Input, Layout } from "@/components/common";
import { pageI18 } from "./i18";
import Link from "next/link";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { login } from "@/store/auth/actions";
import { getErrorTextTwo } from "@/utils/request/getErrorText";

export default function SignIn() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [loginData, setLoadingData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const methods_login = () => {
    dispatch(login(loginData))
      .then((res: any) => {
        console.log("successfully", res);
        router.push("/");
      })
      .catch((err: any) => {
        toast.error(getErrorTextTwo(err));
      })
      .finally(() => {});
  };

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
            <label htmlFor="username" className={styles["email"]}>
              {pageI18.Username}
              <input
                id="username"
                type="username"
                value={loginData.username}
                onChange={(e) =>
                  setLoadingData({ ...loginData, username: e.target.value })
                }
              />
            </label>
            <label htmlFor="password" className={styles["email"]}>
              {pageI18.Password}
              <input
                id="password"
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoadingData({ ...loginData, password: e.target.value })
                }
              />
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
              onClick={() => methods_login()}
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
