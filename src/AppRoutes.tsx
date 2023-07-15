import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rank from "./pages/Rank";
import Kampus from "./pages/kampus/Kampus";
import About from "./pages/about/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/Kampus" element={<Kampus />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
