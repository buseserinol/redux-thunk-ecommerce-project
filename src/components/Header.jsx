import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar bg-body-tertiary position-sticky top-0 z-3 shadow shadow-lg">
      <div className="container-fluid">
        <Link to={"/"} className=" outline d-flex gap-3 align-items-center">
          <img src="/vite.svg" alt="logo" />

          <span>Redux Thunk</span>
        </Link>

        <div className="d-flex gap-3">
          <NavLink className="outline" to={"/"}>
            Anasayfa
          </NavLink>
          <NavLink className="outline" to={"/sepet"}>
            <span>Sepet</span>
            <span className="badge bg-danger mx-2">12</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
