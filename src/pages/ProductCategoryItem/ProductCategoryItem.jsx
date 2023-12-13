import { Link } from "react-router-dom";
import "./ProductCategoryItem.scss";
import moreBTN from "./../../../public/moreBTN.png";

const ProductCategoryItem = ({ name, img, id }) => {
  return (
    <>
      <div className="gridbox">
        <Link to={`/products/product-details/${id}`}>
          <li className="listitem">
            <div className="titlebox">
              <p className="card_title">{name}</p>
              <img src={moreBTN} alt="" />
            </div>
            <img src={img} alt="drink-img" />
          </li>
        </Link>
      </div>
    </>
  );
};

export default ProductCategoryItem;
