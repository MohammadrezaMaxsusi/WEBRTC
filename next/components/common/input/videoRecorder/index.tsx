// @ts-nocheck
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import styles from "./index.module.scss";
import { authMessages } from "@/components/pages/auth/i18n/authMessages";
import { Button } from "../../index";
import { toast } from "react-toastify";
type Props = {
  size: Number;
  onStop: Function;
  clear: Function;
};

export default function WebcamVideo(props: Props) {
  const { size, onStop, clear } = props;
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [playPreview, setPlayPreview] = React.useState(false);
  const [finished, setFinished] = React.useState(false);
  const [previewUrl, setPreviewUrl] = React.useState(null);
  const [hasWebcam, setHasWebcam] = React.useState(true);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = () => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
    setFinished(true);
    toast.success("ضبط با موفقیت انجام شد.");
  };

  useEffect(() => {
    const blob = new Blob(recordedChunks, {
      type: "video/webm",
    });
    console.log(blob);
    const url = URL.createObjectURL(blob);
    onStop(recordedChunks);
    setPreviewUrl(url);
  }, [recordedChunks]);
  // const handleDownload = React.useCallback(() => {
  //   if (recordedChunks.length) {
  //     const blob = new Blob(recordedChunks, {
  //       type: "video/webm",
  //     });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     document.body.appendChild(a);
  //     a.style = "display: none";
  //     a.href = url;
  //     a.download = "react-webcam-stream-capture.webm";
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     setRecordedChunks([]);
  //   }
  // }, [recordedChunks]);

  const videoConstraints = {
    width: size,
    height: size,
    facingMode: "user",
  };

  console.log(size);

  const audioConstraints = {
    suppressLocalAudioPlayback: true,
    noiseSuppression: true,
    echoCancellation: true,
  };

  return (
    <div className={styles["wrapper"]}>
      {playPreview ? (
        <video width={size} height={size} autoPlay={true} muted={false}>
          <source src={previewUrl} type="video/webm" />
        </video>
      ) : !finished ? (
        <div className={styles["webcam"]}>
          <Webcam
            height={size}
            width={size}
            audio={true}
            muted={true}
            audioConstraints={audioConstraints}
            mirrored={true}
            ref={webcamRef}
            videoConstraints={videoConstraints}
            onUserMediaError={()=>{
              toast.error("لطفا در دستگاهی که دوربین و یا وب کم دارد تلاش کنید.")
              setCapturing(false);
              setHasWebcam(false)

            }}
          />
        </div>
      ) : (
        <div className={styles["gap"]}></div>
      )}

      {finished ? (
        playPreview ? (
          <Button
            title={authMessages["clear"]}
            onClick={() => {
              setPlayPreview(false);
              setRecordedChunks([]);
              setFinished(false);
              clear();
            }}
            loading={false}
            className={styles["stop"]}
          />
        ) : (
          <Button
            title={authMessages["preview"]}
            onClick={() => setPlayPreview(true)}
            loading={false}
            className={styles["start"]}
          />
        )
      ) : capturing ? (
        <Button
          title={authMessages["stop"]}
          onClick={handleStopCaptureClick}
          loading={false}
          className={styles["stop"]}
        />
      ) : (
        hasWebcam
          &&
        <Button
            title={authMessages["start"]}
            onClick={handleStartCaptureClick}
            loading={false}
            className={styles["start"]}
        />
      )}
    </div>
  );
}
