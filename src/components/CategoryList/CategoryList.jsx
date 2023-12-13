import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoryList.scss";

const CategoryList = () => {
  // Array der Kategorien erstellt um mit einem loop die Kategorien auszugeben
  const categories = ["Gin", "Vodka", "Rum", "Scotch", "Alkoholfrei", "Zufall"];

  return (
    <section className="section-category container">
      {categories.map((category, index) => (
        // Weitereleitung der id nur für styling zwecke.
        <CategoryItem key={index} category={category} id={index + 1} />
      ))}
    </section>
  );
};

export default CategoryList;
