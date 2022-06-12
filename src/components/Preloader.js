import React from "react";
import styles from "./styles.module.css";

export const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__inner}></div>
    </div>
  );
};
