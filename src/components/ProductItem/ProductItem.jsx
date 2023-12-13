const ProductItem = ({ name, img }) => {
  return (
    <>
      <li>
        <p className="card_title">{name}</p>
        <img src={img} alt="drink-img" />
      </li>
    </>
  );
};

export default ProductItem;
