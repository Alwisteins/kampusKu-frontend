// import Skeleton from "../../components/partials/Skeleton";
import { useEffect, useState } from "react";
import { Kampus } from "../../model/getAllCampus";
// import { ImLocation } from "react-icons/im";
// import { Link } from "react-router-dom";
// import { button } from "../../utils/base";
// import { cn } from "../../utils";
import Card from "./Card";
import Skeleton from "../../components/partials/Skeleton";

const SemuaKampus = () => {
  const [data, setData] = useState<Kampus[]>([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3001/kampus?_page=10&_limit=5");
      const { kampus: data } = await res.json();
      setData(data);
      setStatus(true);
    }
    getData();
  }, []);
  if (status == false)
    return (
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5 mt-20 px-2">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );

  return (
    <div className="min-h-screen py-5 text-center">
      <h1 className="text-2xl font-bold text-center">Daftar Semua Kampus</h1>
      <p>Tampilkan daftar kampus disini.</p>
      <div className="my-20 grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8 gap-5 md:px-0 px-2">
        {data.map((kampus) => (
          <Card kampus={kampus} />
        ))}
      </div>
    </div>
  );
};

export default SemuaKampus;
