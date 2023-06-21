import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rank from "./pages/Rank";
import Kampus from "./pages/Kampus";
import About from "./pages/about/About";
import Test3 from "./pages/__Test3";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/Kampus" element={<Kampus />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test3 />} />
    </Routes>
  );
}

export default AppRoutes;
