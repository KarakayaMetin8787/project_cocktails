import { useState } from "react";
import "./Hero.scss";

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fetchData, setFetchData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  const SearchButton = () => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFetchData(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <form className="section-hero container" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <input type="submit" value="Search" onClick={() => SearchButton()} />
      </form>
    </>
  );
};

export default Hero;
