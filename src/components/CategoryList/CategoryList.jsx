import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoryList.scss";

const CategoryList = () => {
  const categories = ["Gin", "Vodka", "Rum", "Scotch", "Alkoholfrei", "Zufall"];

  return (
    <section className="section-category container">
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} id={index + 1} />
      ))}
    </section>
  );
};

export default CategoryList;
