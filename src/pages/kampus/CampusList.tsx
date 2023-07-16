import { Kampus } from "../../model/getAllCampus";
import Card from "./HorizontalCard";
import Skeleton from "../../components/ui/card-skeleton";
import { useQuery } from "@tanstack/react-query";
import InternalServerError from "../../components/error/500";
import { getAllCampus } from "../../lib/handler/campus.handler";

const CampusList = () => {
  const {
    data: campusData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["get-all-campus"],
    queryFn: getAllCampus,
  });

  // Jika fetcing data error
  if (error) return <InternalServerError />;

  // Jika data state nya loading
  if (isLoading)
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
      <h1 className="text-2xl font-bold text-center uppercase text-gray-800">
        Daftar Semua Kampus
      </h1>
      <div className="my-20 grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8 gap-5 md:px-0 px-2">
        {campusData.map((kampus: Kampus) => (
          <Card kampus={kampus} />
        ))}
      </div>
    </div>
  );
};

export default CampusList;
