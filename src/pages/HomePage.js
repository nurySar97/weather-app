import { Regions } from "@src/components";
import { useStore } from "@src/hooks";

export const HomePage = () => {
  const { searchValue, setSearchValue, onSearchSubmit, isSearching } =
    useStore();

  return (
    <section>
      <div className="container">
        <h1 className="text-light text-center pt-4 pb-4 fw-bold">
          Wheater Anywhere!
        </h1>

        <div className="row justify-content-center">
          <div className="col col-lg-8">
            <form onSubmit={onSearchSubmit}>
              <div className="input-group mb-3">
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  type="text"
                  className="form-control"
                  placeholder="Search city..."
                  aria-label="City"
                  aria-describedby="basic-addon1"
                />
                <button className="input-group-text" type="submit">
                  {isSearching ? (
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    <>&#x1F50E;</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Regions />
      </div>
      ;
    </section>
  );
};
