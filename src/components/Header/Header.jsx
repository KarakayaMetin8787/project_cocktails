import Hero from "../Hero/Hero";
import Nav from "../Nav/Nav";
import "./Header.scss"

const Header = () => {
  const SearchButton = () => {};

  return (
    <header>
      <Nav />
      <Hero />
    </header>
  );
};

export default Header;
