import { useEffect, useState } from "react";
import ProductCategoryItem from "../ProductCategoryItem/ProductCategoryItem";
import { useLocation, useParams } from "react-router-dom";
import "./ProductCategoryList.scss";

const ProductCategoryList = () => {
  const [data, setData] = useState();
  const category = useLocation();

  //   save path for fetching at specific api endpoint
  let path = `${category.pathname}${category.search}`
    .split("/")
    .slice(2)
    .join();

  //   fetching data with path from specific cocktail API endpoint and save them in data state
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/${path}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.log("Tell me why: ", error));
  }, []);

  console.log(data);

  return (
    <>
      <ul className="list">
        {/* render component productitem and pass data */}
        {data ? (
          <>
            {data?.drinks.map((drink) => (
              <ProductCategoryItem
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

export default ProductCategoryList;
