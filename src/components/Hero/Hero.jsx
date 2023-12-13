import { useContext, useState } from "react";
import { SearchFetchContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const [searchInput, setSearchInput] = useState("");
    const SearchNameValue = useContext(SearchFetchContext);
    const navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault()
        }
        
        const SearchButton = () => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
                .then (response => response.json())
                .then(data => {
                    SearchNameValue.setSearchName(data);
                    navigate("/productlist");
                })
                .catch (error => console.error(error));
        }
    
    return ( 
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event) => setSearchInput(event.target.value)}/>
            <input type="submit" value="Search" onClick={() => SearchButton()}/>
        </form>
        </>
    );
}

export default Hero;