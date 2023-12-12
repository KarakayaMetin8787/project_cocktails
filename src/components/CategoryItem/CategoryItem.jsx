import { Link } from "react-router-dom";
import "./CategoryItem.scss";

const CategoryItem = ({ category, id }) => {
  //   const [categoryName, setCategoryName] = useState("");

  const handleCategoryClick = () => {};

  const categoryArr = [
    { name: "gin", bgColor: "#161616" },
    { name: "vodka", bgColor: "#161616" },
    { name: "rum", bgColor: "#161616" },
    { name: "scotch", bgColor: "#161616" },
    { name: "alkoholfrei", bgColor: "#161616" },
    { name: "zufall", bgColor: "#161616" },
  ];

  const categoryObj = categoryArr.find(
    (cat) => cat.name === category.toLowerCase()
  );
  // Verwenden Sie die bgColor des gefundenen Kategorieobjekts, oder setzen Sie eine Standardfarbe, wenn keine Kategorie gefunden wird
  const backgroundColor = categoryObj ? categoryObj.bgColor : null;

  return (
    <Link to={`/products/${category.toLowerCase()}`}>
      <article
        className="category-item"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <span className="category-item-accent">{id}</span>
        <h2 className="category-item-headline">{category}</h2>
        <p className="category-item-content">Ipsum dolor sit amet</p>
      </article>
    </Link>
  );
};

export default CategoryItem;
