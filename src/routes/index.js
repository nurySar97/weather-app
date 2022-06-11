import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import WeatherPage from "../pages/WeatherPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/weather/:city" element={<WeatherPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
