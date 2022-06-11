import "./global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import { StoreProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <Routes />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// const weather = {
//   cloudy: "https: klkfdskfl",
//   cold: "https: ",
// }
