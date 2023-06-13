import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/searching-page/Filter";
import Result from "../../components/searching-page/Result";
import "./kampus.scss";

function Kampus() {
  return (
    <div className="kampus">
      <Navbar />
      <div className="section">
        <Filter />
        <Result />
      </div>
    </div>
  );
}

export default Kampus;
