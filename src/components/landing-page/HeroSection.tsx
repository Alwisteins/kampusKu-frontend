// import "./heroSection.scss";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.svg";
import { BsArrowRight } from "react-icons/bs";
import { button } from "../../utils/base";

function HeroSection() {
  return (
    <div className="heroSection md:p-0 p-4 min-h-screen container mx-auto pt-10 grid md:grid-cols-2 items-center justify-center">
      <div className="flex flex-col md:text-start text-center ">
        <h1 className="md:text-6xl text-4xl font-extrabold capitalize">
          temukan kampus Impianmu, dengan{" "}
          <span className="italic bg-gradient-to-tr from-blue-600 via-blue-300 to-indigo-600 text-transparent bg-clip-text">
            kampusKu
          </span>
        </h1>
        <p className="md:text-xl text-lg my-3 text-gray-600">
          Temukan kampus impianmu dengan rekomendasi berbagai macam universitas,
          politeknik, institut, maupun akademi yang ada di indonesia disini
        </p>

        <Link to={"/kampus"} className={button({ size: "xl", rounded: "lg" })}>
          Temukan Sekarang <BsArrowRight />
        </Link>
      </div>
      <div className="aspect-square md:order-last order-first md:inline-block flex items-center justify-center">
        <img className="w-full h-full object-cover" src={banner} alt="banner" />
      </div>
    </div>
  );
}

export default HeroSection;
