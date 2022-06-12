import styles from "./style.module.css";

import { Outlet } from "react-router-dom";
import { NavbarComponent } from "@src/components";

export const MainLayout = () => {
  return (
    <main className={styles.main}>
      <NavbarComponent />
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  );
};
