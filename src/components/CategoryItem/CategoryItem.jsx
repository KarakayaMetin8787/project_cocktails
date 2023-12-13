import { Link } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem = ({ category, id }) => {
  // Array zum Vergleich um durch iterration das richtige Produkt zu finden und auszugeben
  // Außerden werden Bilder zu den Kategorien hinzugefügt.
  if (category === "Alkoholfrei") {
    category = "Non_Alcoholic";
  } else if (category === "Zufall") {
    category = "Random";
  }

  const categoryArr = [
    { name: "gin", image: "/public/gin.jpg" },
    {
      name: "vodka",
      image: "/public/vodka.jpg",
    },
    { name: "rum", image: "/public/rum.jpg" },
    {
      name: "scotch",
      image: "/public/scotch.jpg",
    },
    {
      name: "non_alcoholic",
      image: "/public/alcohol-free.jpg",
    },
    {
      name: "random",
      image: "/public/random-coctails.jpg",
    },
  ];

  // finden der richtigen Kategorie. Gibt das Objekt nach eine Kategorievergleich aus
  const categoryObj = categoryArr.find(
    (cat) => cat.name === category.toLowerCase()
  );

  return (
    <Link to={`/products/${categoryObj.name}`}>
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
