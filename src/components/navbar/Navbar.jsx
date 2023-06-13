import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <h1>KampusKu</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/rank">Rank</a>
        </li>
        <li>
          <a href="/kampus">Kampus</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
