import List from "./List";
import { useEffect } from "react";

function Rank() {
  useEffect(() => {
    document.title = "Rank | KampusKu";
  }, []);

  return (
    <div className="rank pt-20 container mx-auto">
      <List />
    </div>
  );
}

export default Rank;
