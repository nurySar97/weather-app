import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const storeContext = createContext(null);

export function StoreProvider({ children }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState({});

  const onSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = `${process.env.REACT_APP_BASE_URL}weather?q=${searchValue}&units=metric&APPID=${process.env.REACT_APP_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setSearchValue("");
      navigate("/weather");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <storeContext.Provider
      value={{ onSearchSubmit, searchValue, setSearchValue, weather }}
    >
      {children}
    </storeContext.Provider>
  );
}
