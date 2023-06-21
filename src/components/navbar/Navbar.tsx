import { useState } from "react";
import Logo from "../partials/Logo";
import NavMenu from "./NavMenu";
import { FaHeart } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { cn } from "../../utils";
import { button } from "../../utils/base";

function Navbar() {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <nav className="navbar md:p-0 p-3 z-10 fixed w-screen bg-gradient-to-r from-white/80 to-blue-50/70 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button onClick={showMenu} className="md:hidden inline-block">
            <BsList />
          </button>
          <Logo />
        </div>
        <div className="nav_menus md:flex hidden items-center space-x-8">
          <NavMenu />
        </div>
        <Link
          to={"/"}
          className={cn(
            button({
              size: "sm",
            }),
            "rounded-xl"
          )}
        >
          <FaHeart />
          Support Us
        </Link>
      </div>
      {/* Mobile Menus */}
      <div
        onClick={() => setShow(false)}
        className={`${
          show ? "h-auto py-3" : "h-0"
        } duration-300 transition overflow-hidden md:hidden flex flex-col`}
      >
        <NavMenu isMobile />
      </div>
    </nav>
  );
}

export default Navbar;
