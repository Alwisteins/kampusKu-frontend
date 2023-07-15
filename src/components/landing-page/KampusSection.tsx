// import "./kampusSection.scss";
import { Link } from "react-router-dom";
import findCampus from "../../assets/find-campus.svg";
import { cn } from "../../utils";
import { button } from "../../utils/base";
import { BsArrowRight } from "react-icons/bs";

function KampusSection() {
  return (
    <div className="container mx-auto">
      <div className="kampusSetion md:min-h-screen md:py-0 py-20 grid md:grid-cols-2 items-center justify-center">
        <div className="md:block flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={findCampus}
            alt="find-campus-img"
          />
        </div>
        <div className="md:px-0 px-3">
          <h1 className="md:text-5xl text-3xl active:scale-95 focus-within:scale-95 duration-200 font-extrabold md:text-start text-center mb-5 md:w-[80%] capitalize">
            Ratusan rekomendasi kampus di indonesia
          </h1>
          <p className="text-lg md:text-start text-center text-gray-600 mb-5">
            Cari tahu kampus apa saja yang ada di indonesia berdasarkan
            akreditasi, fakultas, akreditasi, dll
          </p>
          {/* <Button>Cari Tahu Disini</Button> */}
          <Link
            to={"/kampus"}
            className={cn(
              button({
                size: "lg",
                variant: "primary",
              }),
              "md:mx-0 mx-auto"
            )}
          >
            Cari Tahu Disini <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KampusSection;
