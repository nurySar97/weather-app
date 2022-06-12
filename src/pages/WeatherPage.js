import styles from "./style.module.css";
import { Navigate } from "react-router-dom";
import { useStore } from "@src/hooks";

export const WeatherPage = () => {
  const { currentWeather } = useStore();

  if (Object.keys(currentWeather).length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={styles.weather}>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{currentWeather.name}</h5>
              <h4>{currentWeather.weather[0].description}</h4>
              <pre className="card-text">
                {JSON.stringify(currentWeather, null, 3)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
