import "@src/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { MainRoutes } from "@src/routes";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { StoreProvider } from "@src/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter basename="weather-app">
      <StoreProvider>
        <MainRoutes />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
);
