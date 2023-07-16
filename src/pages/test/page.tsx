import { useQuery } from "@tanstack/react-query";
import Skeleton from "../../components/ui/card-skeleton";

const getData = async () => {
  const res = await fetch("http://localhost:3001/provinsi");
  const { provinsi: data } = await res.json();
  console.log({ data });

  return data;
};

const Test = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["test-query"],
    queryFn: async () => await getData(),
  });

  if (isLoading)
    return (
      <div className="container mx-auto pt-20 grid grid-cols-2 gap-5">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Test Page</h1>
        <div>{JSON.stringify(data)}</div>
      </div>
    </div>
  );
};

export default Test;
