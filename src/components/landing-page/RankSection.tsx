// import "./rankSection.scss";
import {
  BsHouseFill,
  BsFillBookmarkStarFill,
  BsStarFill,
  BsArrowRight,
} from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import RankCard, { RankCardProps } from "../partials/RankCard";
import { Link } from "react-router-dom";
import { button } from "../../utils/base";
import { cn } from "../../utils";

function RankSection() {
  const data: RankCardProps[] = [
    {
      title: "Tipe Kampus",
      icon: <BsFillBookmarkStarFill size={32} />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis dolore quam maxime.",
    },
    {
      title: "Rank Nasional",
      icon: <BsHouseFill size={32} />,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ea ut quia impedit, soluta debitis quas.",
    },
    {
      title: "Region & Lokasi",
      icon: <FaBuilding size={32} />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis dolore quam maxime.",
    },
    {
      title: "Akreditasi",
      icon: <BsStarFill size={32} />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis dolore quam maxime.",
    },
  ];

  return (
    <div className="rankSection bg-gradient-to-tr from-blue-600 via-blue-400 to-indigo-500">
      <div className="container mx-auto py-10">
        <h1 className="md:text-4xl text-center my-10 text-2xl font-extrabold text-transparent bg-gradient-to-r from-blue-50 to-white bg-clip-text capitalize">
          {/* Rekomendasi berdasarkan peringkat nasional kampus */}
          Rekomendasi Kampus berdasarkan rank nasional
        </h1>
        <div className="grid md:mx-0 mx-3 mb-10 mt-5 2xl:grid-cols-4 md:grid-cols-3 gap-6">
          {data.map((item) => (
            <RankCard
              title={item.title}
              key={item.title}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
        <Link
          to="/kampus"
          className={cn(
            button({ variant: "link", bg: "solid", shadow: "none" }),
            "text-gray-200 mx-auto"
          )}
        >
          Jelajahi Daftar Kampus
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default RankSection;
