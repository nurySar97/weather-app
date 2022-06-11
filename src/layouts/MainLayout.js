import React from "react";
import Navbar from "../components/Navbar";
import styles from "./style.module.css";

const MainLayout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default MainLayout;
