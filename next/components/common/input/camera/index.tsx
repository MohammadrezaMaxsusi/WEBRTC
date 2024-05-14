"use client";
// @ts-nocheck
import React, { useCallback, useRef, useState } from "react";
// import Webcam from "react-webcam";
import styles from "./index.module.scss";
import { Button } from "../../index";

type Props = {
  sizes: Array<Number>;
  onChange: Function;
};

export default function WebcamImage(props: Props) {
  const { sizes, onChange } = props;
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: sizes[0],
    height: sizes[1],
    facingMode: "environment",
  };

  const capture = useCallback(() => {
    // const imageSrc = webcamRef.current.getScreenshot();
    // onChange(imageSrc);
  }, [webcamRef]);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["webcam"]}>
        {/* <Webcam
          audio={false}
          mirrored={true}
          muted={true}
          height={sizes[1]}
          width={sizes[0]}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        /> */}
      </div>

      <div className={styles["gap"]}></div>
      <Button
        title={"take a photo"}
        onClick={capture}
        loading={false}
        className={styles["start"]}
      />
    </div>
  );
}
