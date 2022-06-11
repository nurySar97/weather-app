import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import styles from "./style.module.css";

const MainLayout = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
