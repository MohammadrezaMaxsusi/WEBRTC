"use client";
import React from "react";
import styles from "./index.module.scss";
import { ConfMainView, ConfParticipantList } from "@/components/common";
import AgoraRTC, { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";

export default function Participants() {
  const client = useRTCClient(
    AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })
  );

  return (
    <AgoraRTCProvider client={client}>
      <div className={styles.wrapper}>
        <ConfMainView />
        <ConfParticipantList />
      </div>
    </AgoraRTCProvider>
  );
}
