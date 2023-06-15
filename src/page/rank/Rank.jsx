import Navbar from "components/navbar/Navbar";
import List from "components/ranking-page/List";
import "./rank.scss";

function Rank() {
  return (
    <div className="rank">
      <Navbar />
      <div className="section">
        <List />
      </div>
    </div>
  );
}

export default Rank;
