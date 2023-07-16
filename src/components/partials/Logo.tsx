import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="md:text-2xl text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-300 to-indigo-500 bg-clip-text text-transparent italic border-b-2 border-b-blue-600 w-max">
        KampusKu
      </h1>
    </Link>
  );
}

export default Logo;
