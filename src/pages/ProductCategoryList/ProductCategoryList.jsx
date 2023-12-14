import { useContext, useEffect, useState } from "react";
import ProductCategoryItem from "../ProductCategoryItem/ProductCategoryItem";
import { useLocation, useParams } from "react-router-dom";
import "./ProductCategoryList.scss";
import { CreateProductContext } from "../../Context/Context";
import { v4 as uuidv4 } from "uuid";

const ProductCategoryList = () => {
  const [data, setData] = useState();
  const category = useLocation();
  // const { createProduct, setCreateProduct } = useContext(CreateProductContext);

  const productsFromLocalstorage = localStorage.getItem("createdProducts");

  const products = JSON.parse(productsFromLocalstorage);
  console.log("=====", products);

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
  const prod = products.filter((product) => {
    // console.log(path.split("=").slice(-1).join());
    const cat = path.split("=").slice(-1).join();
    console.log(cat);
    return product.category.toLowerCase() === cat;
  });
  console.log(prod);
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
            {prod.map((drink, index) => (
              <ProductCategoryItem
                key={index}
                id={uuidv4()}
                name={drink.name}
                img={drink.imgURL}
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
