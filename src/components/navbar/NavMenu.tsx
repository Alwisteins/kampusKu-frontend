import NavLink from "./NavLink";
import { BsHouseFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { useLocation } from "react-router-dom";

function NavMenu({ isMobile }: { isMobile?: boolean }) {
  const location = useLocation();
  const { pathname } = location;

  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <BsHouseFill size={16} />,
    },
    {
      name: "Rank",
      path: "/rank",
      icon: <BsFillBookmarkStarFill size={16} />,
    },
    {
      name: "Kampus",
      path: "/kampus",
      icon: <FaBuilding size={16} />,
    },
    {
      name: "About",
      path: "/about",
      icon: <BiHelpCircle size={16} />,
    },
  ];

  return menus.map((menu) => (
    <NavLink key={menu.name} path={menu.path} isActive={menu.path == pathname}>
      {isMobile && menu.icon}
      {menu.name}
    </NavLink>
  ));
}

export default NavMenu;
