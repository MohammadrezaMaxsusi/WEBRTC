import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
//@ts-ignore
import _ from "lodash";
// import { Loading } from "@/components/common";
import { useRouter } from "next/router";
// import PageLoading from "./common/PageLoading";
// import { useCheckAuth } from "@/utils/hooks/useCheckAuth";
const withAuth = (WrapperComponent: any) => (props: any) => {
  // const isLoggedInState = useCheckAuth();

  const router = useRouter();
  // const isLoggedIn = useSelector((state) =>
  //   _.get(state, "auth.isLoggedIn", null)
  // );
  // useEffect(() => {
  //   if (isLoggedInState == false) {
  //     router.push("/auth/sign-in");
  //   }
  // }, [isLoggedInState]);

  return (
    <>
      {/* {isLoggedInState == null && <PageLoading />}
      {isLoggedInState == true && <WrapperComponent {...props} />} */}
    </>
  );
};

export default withAuth;
