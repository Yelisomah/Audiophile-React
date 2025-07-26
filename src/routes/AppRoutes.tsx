import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";
import Earphones from "../pages/Earphones";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}