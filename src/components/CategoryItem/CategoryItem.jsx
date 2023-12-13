import { Link } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem = ({ category, id }) => {
  // Array zum Vergleich um durch iterration das richtige Produkt zu finden und auszugeben
  // Außerden werden Bilder zu den Kategorien hinzugefügt.

  const categoryArr = [
    { name: "gin", image: "/public/gin.jpg", urlParamKey: "filter.php?i=" },
    {
      name: "vodka",
      image: "/public/vodka.jpg",
      urlParamKey: "filter.php?i=",
    },
    { name: "rum", image: "/public/rum.jpg", urlParamKey: "filter.php?i=" },
    {
      name: "scotch",
      image: "/public/scotch.jpg",
      urlParamKey: "filter.php?i=",
    },
    {
      name: "non_alcoholic",
      image: "/public/alcohol-free.jpg",
      urlParamKey: "filter.php?a=",
    },
    {
      name: "random",
      image: "/public/random-coctails.jpg",
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

  return (
    <Link
      to={
        category === "Zufall"
          ? `/products/${categoryObj.urlParamKey}`
          : `/products/${categoryObj.urlParamKey}${categoryObj.name}`
      }
    >
      <article className="category-item">
        <div className="category-item-overlay"> </div>
        <img className="category-item-img" src={categoryObj.image} alt="" />
        <span className="category-item-accent">{id}</span>
        <h2 className="category-item-headline">{category}</h2>
        <p className="category-item-content">Ipsum dolor sit amet</p>
      </article>
    </Link>
  );
};

export default CategoryItem;
