import Filter from "../components/searching-page/Filter";
import Result from "../components/searching-page/Result";
import { useEffect } from "react";

function Kampus() {
  useEffect(() => {
    document.title = "Kampus | KampusKu";
  }, []);

  return (
    <div className="kampus container mx-auto pt-20  md:px-0 px-3">
      <Filter />
      <Result />
    </div>
  );
}

export default Kampus;
