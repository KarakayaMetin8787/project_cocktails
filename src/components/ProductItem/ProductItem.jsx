import { Link } from "react-router-dom";
import "./ProductItem.scss"

const ProductItem = ({ name, img, id }) => {
  return (
    <>
      <Link to={`/products/product-details/${id}`}>
        <li className="Productlistitem">
          <p className="Productcard_title">{name}</p>
          <img src={img} alt="drink-img" />
        </li>
      </Link>
    </>
  );
};

export default ProductItem;
