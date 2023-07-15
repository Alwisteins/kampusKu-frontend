import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsPinterest,
  BsSearch,
  BsTwitter,
} from "react-icons/bs";
import Logo from "./partials/Logo";
import { Link } from "react-router-dom";
import { input } from "../utils/base";

const Footer = () => {
  return (
    <footer className="min-h-screen md:px-0 px-8 md:pt-20 pt-10 grid content-between bg-gradient-to-tr from-white via-pink-50 to-blue-100">
      <div className="container mx-auto flex md:flex-row flex-col gap-10">
        <div className="md:w-1/4 text-xl flex flex-col gap-3">
          <Logo />
          <p className="text-gray-500 text-base">
            KampusKu adalah Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <div className="flex items-center gap-x-5 mt-3 text-gray-800">
            <BsGithub />
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsPinterest />
          </div>
        </div>
        <div className="md:w-3/4 grid md:grid-cols-5 grid-cols-2 gap-5">
          <div className="company flex flex-col gap-5 text-gray-500">
            <h4 className="font-semibold text-gray-800">Company</h4>
            <Link to={"/"}>Tentang</Link>
            <Link to={"/"}>Karir</Link>
            <Link to={"/"}>Dukungan</Link>
            <Link to={"/"}>Testimoni</Link>
            <Link to={"/"}>Kebijakan</Link>
            <Link to={"/"}>Policy</Link>
          </div>
          <div className="menu flex flex-col gap-5 text-gray-500">
            <h4 className="font-semibold text-gray-800">Menu</h4>
            <Link to={"/"}>Beranda</Link>
            <Link to={"/"}>Kampus</Link>
            <Link to={"/"}>Ranking</Link>
            <Link to={"/"}>Tentang</Link>
            <Link to={"/"}>Team</Link>
          </div>
          <div className="socials flex flex-col gap-5 text-gray-500">
            <h4 className="font-semibold text-gray-800">Sosial</h4>
            <Link to={"/"}>GitHub</Link>
            <Link to={"/"}>Facebook</Link>
            <Link to={"/"}>Twitter</Link>
            <Link to={"/"}>Instagram</Link>
            <Link to={"/"}>Pinterest</Link>
          </div>
          <div className="socials md:col-span-2 flex flex-col gap-5 text-gray-500">
            <form className="mb-5">
              <h5 className="font-semibold mb-5 text-gray-800">Pencarian</h5>
              <div className="flex items-center relative">
                <input
                  type="search"
                  placeholder="Cari..."
                  className={input({ rounded: "lg" })}
                />
                <button className="absolute right-4" type="submit">
                  <BsSearch />
                </button>
              </div>
            </form>
            <h4 className="font-semibold text-gray-800">Alamat</h4>
            <p>
              Jl. Lorem, ipsum. no 42 Lorem ipsum dolor sit, amet consectetur
              adipisicing.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:pt-0 pt-5">
        <hr />
        <div className="flex md:flex-row flex-col md:gap-0 gap-4 items-center py-8 justify-between">
          <h6 className="text-gray-600">@ 2023 KampusKu. Allright reserved</h6>
          <h6 className="text-gray-600 flex items-center gap-x-2">
            Powerred By :
            <Logo />
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
