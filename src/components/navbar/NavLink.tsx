import { Link } from "react-router-dom";

type NavLinkProps = {
  path: string;
  children: React.ReactNode;
  isActive?: boolean;
};

function NavLink({ path, isActive, children }: NavLinkProps) {
  return (
    <Link
      to={path}
      className={`${
        isActive
          ? " text-blue-600 border-b-blue-500"
          : "text-gray-500 border-b-transparent"
      } uppercase hover:text-blue-500 duration-300 font-medium text-sm py-4 px-2 md:border-b-2 md:inline flex items-center gap-x-2`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
