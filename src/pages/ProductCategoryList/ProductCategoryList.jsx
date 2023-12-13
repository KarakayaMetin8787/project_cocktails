import { useEffect, useState } from "react";
import ProductCategoryItem from "../ProductCategoryItem/ProductCategoryItem";

const ProductCategoryList = () => {
  const [data, setData] = useState();

  //   test-state for simulating searchinput - will be passed from home
  const [search, setSearch] = useState("filter.php?i=Gin");

  //   fetching data from cocktail API and save them in data state
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/${search}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.log("Tell me why: ", error));
  }, []);

  console.log(data);

  return (
    <>
      <ul>
        {/* render component productitem and pass data */}
        {data ? (
          <div>
            {data.drinks.map((drink) => (
              <ProductCategoryItem
                key={drink.idDrink}
                name={drink.strDrink}
                img={drink.strDrinkThumb}
              />
            ))}
          </div>
        ) : (
          <p>Drinks werden geladen....</p>
        )}
      </ul>
    </>
  );
};

export default ProductCategoryList;
