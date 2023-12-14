import { Link, NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <article className="navigation">
      <Link to="/" className="logo">
        Drinks&Chill
      </Link>
      <nav className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/createProduct">Create Product</NavLink>
      </nav>
    </article>
  );
};

export default Nav;
