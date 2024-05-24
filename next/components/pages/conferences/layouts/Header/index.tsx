import React from 'react'
import styles from "./index.module.scss";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leading}></div>
      <div className={styles.actions}></div>
    </div>
  )
}
