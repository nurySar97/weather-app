import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@src/layouts";

import { HomePage, WeatherPage, NotFoundPage } from "@src/pages";
import { Toaster } from "react-hot-toast";

export function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </>
  );
}
