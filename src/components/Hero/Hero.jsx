import { useContext, useState } from "react";
import { SearchFetchContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Hero = () => {
    const [searchInput, setSearchInput] = useState("");
    const SearchNameValue = useContext(SearchFetchContext);
    const location = useLocation()
    
    function handleSubmit(event) {
        event.preventDefault()
        }
        
        const SearchButton = () => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
                .then (response => response.json())
                .then(data => {
                    const newLocation = { ...location, pathname: "/productlist" };
                window.history.pushState(null, "", newLocation.pathname);
                })
                .catch (error => console.error(error));

        }
    
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event) => setSearchInput(event.target.value)}/>
            <input type="submit" value="Search" onClick={() => SearchButton()}/>
            <Link to="/productlist">go to productlist</Link>
        </form>
        </>
    );
}

export default Hero;