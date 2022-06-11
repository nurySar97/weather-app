import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import WeatherPage from "../pages/WeatherPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/weather/:city" element={<WeatherPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
