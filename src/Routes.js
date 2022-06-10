import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

export default function routes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
