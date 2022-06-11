import React from "react";

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-light text-center pt-4 pb-4 fw-bold">
          Wheater Anywhere!
        </h1>

        <div className="row justify-content-center">
          <div className="col col-lg-8">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                &#x1F50E;
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search city..."
                aria-label="City"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default HomePage;
