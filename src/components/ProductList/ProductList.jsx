import { useContext } from "react";
import { SearchFetchContext } from "../../Context/Context";
import ProductItem from "./../ProductItem/ProductItem";

const ProductList = () => {
  const SearchNameValue = useContext(SearchFetchContext);
  console.log(SearchNameValue);
  return (
    <>
      <ul className="list">
        {/* render component productitem and pass data */}
        {SearchNameValue.searchName ? (
          <>
            {SearchNameValue?.searchName.drinks.map((drink) => (
              <ProductItem
                key={drink.idDrink}
                id={drink.idDrink}
                name={drink.strDrink}
                img={drink.strDrinkThumb}
              />
            ))}
          </>
        ) : (
          <p>Drinks werden geladen....</p>
        )}
      </ul>
    </>
  );
};

export default ProductList;
