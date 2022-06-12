import { useStore } from "@src/hooks";
import { Preloader, ImageComponent } from "@src/components";
import { Images } from "@src/assets/images";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const Regions = () => {
  const { setCurrentWeather, weathers, isFetching } = useStore();
  const navigate = useNavigate();

  const onItemClick = (region) => {
    setCurrentWeather(weathers[region]);
    navigate("/weather");
  };

  return (
    <div className="row justify-content-center gap-3  ">
      {isFetching ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        Object.keys(weathers).map((region) => {
          const currentRegionWeather = weathers[region];
          return (
            <div
              className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-6 cursor-pointer"
              key={region}
              onClick={() => onItemClick(region)}
            >
              <div className="card main-bg border-0">
                <div className="card-body p-1">
                  <ImageComponent
                    url={Images[region]}
                    preloader={Preloader}
                    alt={region}
                    className={styles["card-image"]}
                  />
                  <div className="p-3 text-light">
                    <h5 className="card-title fw-bold fs-4">
                      {region}
                      <span className="ms-3">
                        {currentRegionWeather.main.temp} &#x2103;
                      </span>
                    </h5>
                    <p className="text-capitalize fst-italic fs-5">
                      {currentRegionWeather.weather[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
