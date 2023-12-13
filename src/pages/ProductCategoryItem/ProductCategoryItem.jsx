import { Link } from "react-router-dom";
import "./ProductCategoryItem.scss";

const ProductCategoryItem = ({ name, img, id }) => {
  return (
    <>
      <Link to={`/products/${id}`}>
        <li className="listitem">
          <p className="card_title">{name}</p>
          <img src={img} alt="drink-img" />
        </li>
      </Link>
    </>
  );
};

export default ProductCategoryItem;
// `/products/${id}`
