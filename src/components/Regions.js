import { useStore } from "@src/hooks";
import { Preloader, ImageComponent } from "@src/components";
import { Ashgabat } from "@src/assets/images";
import styles from "./styles.module.css";

export const Regions = () => {
  const { weathers } = useStore();
  return (
    <div className="row justify-content-center">
      {Object.keys(weathers).map((region) => {
        return (
          <div
            className="col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-sm-6 cursor-pointer"
            key={region}
          >
            <div className="card">
              <div className="card-body p-1">
                <ImageComponent
                  url={Ashgabat}
                  preloader={Preloader}
                  alt="Image"
                  className={styles["card-image"]}
                />
                <h5 className="card-title">{region}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
