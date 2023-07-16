import { BsArrowRepeat } from "react-icons/bs";
import Logo from "../partials/Logo";
import { cn } from "../../utils";
import { button } from "../../utils/base";

const InternalServerError = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center flex-col">
      <Logo />
      <h1 className="text-6xl scale-150 font-extrabold font-mono text-gray-800 mt-10">
        500
      </h1>
      <p className="text-xl font-mono text-gray-600 mt-5 mb-3">
        Internal Server Error
      </p>
      <p className="text-gray-500 mb-5">
        Silahkan refresh halaman ini atau hubungi owner KampusKu
      </p>
      <a href={"/kampus"} className={cn(button({ variant: "danger" }))}>
        <BsArrowRepeat />
        Refresh
      </a>
    </div>
  );
};

export default InternalServerError;
