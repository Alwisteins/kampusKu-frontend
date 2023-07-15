import { useSearchParams } from "react-router-dom";
import Filter from "../../components/searching-page/Filter";
import Result from "../../components/searching-page/Result";
import { useEffect } from "react";
import SemuaKampus from "./Semua";

function Kampus() {
  const [params] = useSearchParams();

  useEffect(() => {
    document.title = "Kampus | KampusKu";
    // console.log({ params: params.entries() });
  }, [params]);

  return (
    <div className="kampus container mx-auto pt-20  md:px-0 px-3">
      <Filter />
      {params.has("jenis") ||
      params.has("provinsi") ||
      params.has("akreditasi") ||
      params.has("fakultas") ? (
        <>
          <Result />
        </>
      ) : (
        <SemuaKampus />
      )}
    </div>
  );
}

export default Kampus;
