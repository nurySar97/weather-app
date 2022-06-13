import styles from "./style.module.css";
import { Link, Navigate } from "react-router-dom";
import { useStore } from "@src/hooks";

export const WeatherPage = () => {
  const { currentWeather } = useStore();

  if (Object.keys(currentWeather).length === 0) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={styles.weather}>
      <Link to={"/"}>
        <button className="btn btn-light mb-3">Back</button>
      </Link>
      <div className="row justify-content-center">
        <div className="col col-xxl-6 col-lg-8">
          <div className={`card ${styles.card} border-0`}>
            <div className={`${styles.card__body} main-bg card-body`}>
              <div className="card-title fs-1 fw-bold d-flex justify-content-between">
                <span>{currentWeather.name}</span>
                <span>
                  <img
                    style={{ width: "60px" }}
                    src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </span>
                <span className="fw-light">{currentWeather.main.temp} ℃</span>
              </div>

              <div className="d-flex align-items-center fs-4 text-capitalize">
                <span className="fw-light">
                  {currentWeather.weather[0].description}
                </span>
              </div>

              <div className="row mt-3 fs-3 fw-light">
                <div className="col-12 fs-5 mb-3 col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                  <span className="fs-5 fw-bold me-2">Feels like:</span>
                  <span>{currentWeather.main.feels_like} ℃ </span>
                </div>
                <div className="col-12 fs-5 mb-3 col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                  <span className="fs-5 fw-bold me-2">Pressure:</span>
                  <span>{currentWeather.main.pressure} hPa </span>
                </div>

                <div className="col-12 fs-5 mb-3 col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                  <span className="fs-5 fw-bold me-2">Max Temperature: </span>
                  <span>{currentWeather.main.temp_max} ℃ </span>
                </div>

                <div className="col-12 fs-5 mb-3 col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                  <span className="fw-bold me-2">Min Temperature:</span>
                  <span>{currentWeather.main.temp_min} ℃ </span>
                </div>

                <div className="col-12 fs-5 mb-3 col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                  <span className="fs-5 fw-bold me-2">Humidity:</span>
                  <span>{currentWeather.main.humidity} % </span>
                </div>

                <div className="col-12 fs-5 mb-3 col-xxl-6 col-lg-6 col-md-6 col-sm-6">
                  <span className="fw-bold me-2">Wind:</span>
                  <span>{currentWeather.wind.speed} m/s </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
