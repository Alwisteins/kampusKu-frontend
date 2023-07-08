import KampusCard from "../partials/KampusCard";
import { dataKampus } from "./handleSubmit";
import { useState, useEffect } from "react";
import { kampus } from "../../model/getAllCampus";
import { getAllCampus } from "../../model/getAllCampus";

function Result() {
  const [filteredData, setFilteredData] = useState<kampus[]>(getAllCampus);
  console.log(filteredData)
  // ini useEffect kalo di aktifin malah filteredData nya ga kerender bjir
  // useEffect(() => {
  //   setFilteredData(dataKampus);
  // }, [dataKampus]);

  return (
    <>
      <h4 className="text-2xl font-bold text-center uppercase text-blue-600">
        Hasil Filter
      </h4>
      <div className="result grid  md:grid-cols-3 2xl:grid-cols-4 gap-8 py-10">
        {filteredData.map((kampus, index) => (
          <KampusCard key={index} kampus={kampus} />
        ))}
      </div>
    </>
  );
}

export default Result;
