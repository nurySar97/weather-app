import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { regions } from "@src/routes";

import toast from "react-hot-toast";

const notify = (message) =>
  toast.error(message, {
    duration: 3000,
  });

export const storeContext = createContext(null);

const sleep = (time = 1000) => new Promise((r) => setTimeout(r, time));

export function StoreProvider({ children }) {
  const navigate = useNavigate();
  const [weathers, setWeathers] = useState({});
  const [isFetching, seIsFetching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `${process.env.REACT_APP_BASE_URL}weather?q=${searchValue}&units=metric&APPID=${process.env.REACT_APP_KEY}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();

        setCurrentWeather(data);
        setSearchValue("");

        return navigate("/weather");
      }

      setSearchValue("");
      notify(searchValue + " " + response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const regions_weather = {};

    (async function () {
      seIsFetching(true);

      for await (let region of regions) {
        const url = `${process.env.REACT_APP_BASE_URL}weather?q=${region}&units=metric&APPID=${process.env.REACT_APP_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        regions_weather[region] = data;
      }
      setWeathers(regions_weather);
      await sleep(500);
      seIsFetching(false);
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
        setCurrentWeather,
        isFetching,
      }}
    >
      {children}
    </storeContext.Provider>
  );
}
