import { BiLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

import satu from "../../assets/img/1.jpg";

type KampusCardProps = {
  kampus: KampusType;
};

type KampusType = {
  name: string;
  kota: string;
  provinsi: string;
  image?: string;
  akreditasi?: string;
  ranking?: number;
};

function KampusCard({ kampus }: KampusCardProps) {
  return (
    <div className="card shadow rounded-xl overflow-hidden bg-gradient-to-tr from-blue-100 via-white to-rose-50">
      <div className="img aspect-video">
        <img src={kampus.image} alt={kampus.name} className="object-cover w-full h-full" />
      </div>
      <div className="px-6 py-3 flex flex-col gap-3">
        <h3 className="text-gray-800 font-bold text-xl uppercase">
          {kampus.name}
        </h3>
        <span className="text-gray-500 text-sm flex items-center">
          <BiLocationPlus />
          {kampus.kota + ', ' + kampus.provinsi}
        </span>
        <Link
          to="/kampus/slug-campus"
          className="text-blue-500 underline-offset-1 underline"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}

export default KampusCard;
