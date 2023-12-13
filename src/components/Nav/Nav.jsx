import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <Link to="/">Drinks&Chill</Link>
      <nav className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/createProduct">Create Product</NavLink>
      </nav>
    </>
  );
};

export default Nav;
