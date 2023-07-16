import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import Rank from "./pages/rank/page";
import Kampus from "./pages/kampus/page";
import About from "./pages/about/page";
import Test from "./pages/test/page";
import NotFoundPage from "./pages/not-found";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/Kampus" element={<Kampus />} />
      <Route path="/about" element={<About />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
