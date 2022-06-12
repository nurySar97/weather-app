import styles from "./style.module.css";
import { Navigate } from "react-router-dom";
import { useStore } from "@src/hooks";
// import { Preloader } from "@src/components";

export const WeatherPage = () => {
  const { currentWeather } = useStore();

  if (Object.keys(currentWeather).length === 0) {
    return <Navigate to={"/"} />;
  }

  return <div className={styles.weather}></div>;
};
