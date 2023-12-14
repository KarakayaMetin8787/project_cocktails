import { Link, useNavigate } from "react-router-dom";
import "./CategoryItem.scss";
import { useContext } from "react";
import { GoBackButtonContext } from "./../../Context/Context"
import { useEffect } from "react";

const CategoryItem = ({ category, id }) => {
  // Array zum Vergleich um durch iterration das richtige Produkt zu finden und auszugeben
  // Außerden werden Bilder zu den Kategorien hinzugefügt.
  
  const categoryArr = [

    { name: "gin", image: "/gin.jpg", urlParamKey: "filter.php?i=" },

    {
      name: "vodka",
      image: "/vodka.jpg",
      urlParamKey: "filter.php?i=",
    },

    { name: "rum", image: "/rum.jpg", urlParamKey: "filter.php?i=" },

    {
      name: "scotch",
      image: "/scotch.jpg",
      urlParamKey: "filter.php?i=",
    },
    {
      name: "non_alcoholic",
      image: "/alcohol-free.jpg",
      urlParamKey: "filter.php?a=",
    },
    {
      name: "random",
      image: "/random-coctails.jpg",
      urlParamKey: "random.php",
    },
  ];
  
  // finden der richtigen Kategorie. Gibt das Objekt nach eine Kategorievergleich aus
  const categoryObj = categoryArr.find((cat) => {
    if (category === "Alkoholfrei") {
      return cat.name === "non_alcoholic";
    } else if (category === "Zufall") {
      return cat.name === "random";
    }
    return cat.name === category.toLowerCase();
  });
  
    const GoBackValue = useContext(GoBackButtonContext);
    const navigate = useNavigate();
    
    const testFunktion = () => {
      if (category === "Zufall") {
        GoBackValue.setgoBackURL(`/products/${categoryObj.urlParamKey}`);
        navigate(`/products/${categoryObj.urlParamKey}`);
      } else {
        GoBackValue.setgoBackURL(`/products/${categoryObj.urlParamKey}${categoryObj.name}`);
        navigate(`/products/${categoryObj.urlParamKey}${categoryObj.name}`);
      }
     }

  return (


    <div onClick={testFunktion}>
      <article className="category-item">
        <div className="category-item-overlay"> </div>
        <img className="category-item-img" src={categoryObj.image} alt="" />
        <span className="category-item-accent-number">{id}</span>
        <h2 className="category-item-headline">{category}</h2>
        <p className="category-item-content">Ipsum dolor sit amet</p>
      </article>
    </div>


  );
};

export default CategoryItem;