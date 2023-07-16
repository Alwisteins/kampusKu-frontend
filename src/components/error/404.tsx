import { BsArrowLeft } from "react-icons/bs";
import { cn } from "../../utils";
import { button } from "../../utils/base";
import Logo from "../partials/Logo";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Logo />
      <h1 className="text-6xl scale-150 font-extrabold font-mono text-gray-800 mt-10">
        404
      </h1>
      <p className="text-xl font-mono text-gray-600 mt-5 mb-3">
        Page Not Found
      </p>
      <p className="text-gray-500 mb-5">
        Halaman yang anda tuju tidak ditemukan! Silahkan kembali ke Beranda.
      </p>
      <a href={"/"} className={cn(button({ variant: "danger" }))}>
        <BsArrowLeft />
        Beranda
      </a>
    </div>
  );
};

export default NotFound;
