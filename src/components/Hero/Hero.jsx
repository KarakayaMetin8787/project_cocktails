import { useContext, useState } from "react";
import {
  SearchFetchContext,
  GoBackButtonContext,
} from "./../../Context/Context";
import { useNavigate } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  const SearchNameValue = useContext(SearchFetchContext);
  const GoBackValue = useContext(GoBackButtonContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
  }

  const SearchButton = () => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        SearchNameValue.setSearchName(data);
        GoBackValue.setgoBackURL("/productlist");
        navigate("/productlist");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form className="SearchForm section-hero" onSubmit={handleSubmit}>
        <input
          className="InputField"
          placeholder="Search for..."
          type="text"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <input
          className="StartSearchButton"
          type="submit"
          value="Search"
          onClick={() => SearchButton()}
        />
      </form>
    </>
  );
};

export default Hero;
