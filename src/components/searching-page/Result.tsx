import { useState } from "react";
import { Kampus } from "../../model/getAllCampus";
import { getAllCampus } from "../../model/getAllCampus";
import { button } from "../../utils/base";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Skeleton from "../ui/card-skeleton";

function Result() {
  const [filteredData, setFilteredData] = useState<Kampus[]>(getAllCampus);
  console.log(filteredData);
  // ini useEffect kalo di aktifin malah filteredData nya ga kerender bjir
  // useEffect(() => {
  //   setFilteredData(dataKampus);
  // }, [dataKampus]);

  return (
    <div className="min-h-screen text-center">
      <div className="md:grid grid-cols-3 flex gap-x-3 justify-center items-center mb-10">
        <Link
          to={"/kampus"}
          className={button({ variant: "danger", size: "sm" })}
        >
          <BsArrowLeft /> Kembali
        </Link>
        <h4 className="text-2xl font-bold  text-center uppercase text-blue-600">
          Hasil Filter
        </h4>
      </div>
      <p>Tampilkan Hasil Filter disini</p>
      <div className="my-5 grid md:grid-cols-3 gap-5 md:px-0 px-3">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      {/* <div className="result grid  md:grid-cols-3 2xl:grid-cols-4 gap-8 py-10">
        {filteredData.map((kampus, index) => (
          <KampusCard key={index} kampus={kampus} />
        ))}
      </div> */}
    </div>
  );
}

export default Result;
