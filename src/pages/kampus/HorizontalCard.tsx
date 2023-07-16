import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import { cn } from "../../utils";
import { button } from "../../utils/base";

import satu from "../../assets/img/1.jpg";
import { Kampus } from "../../model/getAllCampus";

interface Props {
  kampus: Kampus;
}

const HorizontalCard: React.FC<Props> = ({ kampus }) => {
  return (
    <div className="kampus_card flex sm:flex-row flex-col gap-y-3 md:my-0 my-5 gap-x-3">
      <div className="aspect-video md:h-40 rounded-xl overflow-hidden">
        <img src={satu} alt="img" className="h-full w-full object" />
      </div>
      <div className="grid text-start gap-3 w-full content-start">
        <h2 className="text-lg font-bold uppercase text-gray-800">
          {kampus?.name}
        </h2>
        <span className="text-gray-500 flex items-center gap-x-1">
          <ImLocation /> {kampus.kota} - {kampus.provinsi}
        </span>
        <Link
          to={"/kampus/testing-slug"}
          className={cn(button({ size: "sm", variant: "danger" }))}
        >
          View Detail
        </Link>
      </div>
    </div>
  );
};

export default HorizontalCard;
