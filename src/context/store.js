import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { regions } from "../routes/routes.data";

export const storeContext = createContext(null);

export function StoreProvider({ children }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [weathers, setWeathers] = useState({});
  const [currentWeather, setCurrentWeather] = useState({});

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `${process.env.REACT_APP_BASE_URL}weather?q=${searchValue}&units=metric&APPID=${process.env.REACT_APP_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setCurrentWeather(data);
      setSearchValue("");
      navigate("/weather");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const regions_weather = {};

    (async function () {
      for await (let region of regions) {
        const url = `${process.env.REACT_APP_BASE_URL}weather?q=${region}&units=metric&APPID=${process.env.REACT_APP_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        regions_weather[region] = data;
      }
      setWeathers(regions_weather);
    })();
  }, []);

  return (
    <storeContext.Provider
      value={{
        onSearchSubmit,
        searchValue,
        setSearchValue,
        weathers,
        currentWeather,
      }}
    >
      {children}
    </storeContext.Provider>
  );
}
