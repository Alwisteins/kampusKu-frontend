import Home from "./page/home/Home";
import Rank from "./page/rank/Rank";
import Kampus from "./page/search/Kampus";
import About from "./page/about/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/Kampus" element={<Kampus />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
