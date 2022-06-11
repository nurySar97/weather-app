import React from "react";
import { useStore } from "../hook";
import styles from "./style.module.css";

const WeatherPage = () => {
  const { currentWeather, weathers } = useStore();
  console.log(weathers, currentWeather);
  return (
    <div className={styles.weather}>
      <div className="card">
        <img className="card-img-top" src="..." alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div href="#" className="btn btn-primary">
            Go somewhere
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
