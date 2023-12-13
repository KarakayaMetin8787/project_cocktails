import "./CreateProduct.scss";

const CreateProduct = () => {
  return (
    <main className="section-create-product container">
      <h2 className="create-product-headline">
        Füge deine eigenen Getränke hinzu!
      </h2>{" "}
      <section className="create-product-content">
        <form className="create-product-form">
          <input
            type="text"
            name="name"
            id="name"
            className="create-product-"
            placeholder="Name"
          />
          <input
            type="text"
            name="categorie"
            id="categorie"
            className="create-product-categorie"
            placeholder="Kategorie"
          />
          <input
            type="text"
            name="img-url"
            id="img-url"
            className="create-product-img-url"
            placeholder="Bild URL"
          />
          <textarea
            name="instruction"
            id="instruction"
            cols="30"
            rows="10"
            className="create-product-instruction"
            placeholder="Anleitung"
          ></textarea>
          <input
            type="text"
            name="Ingredient-1"
            id="Ingredient-1"
            className="create-product-ingredient"
            placeholder="Zutat 1"
          />
          <input
            type="text"
            name="quantity-ingredient-1"
            id="quantity-ingredient-1"
            className="create-product-quantity-ingredient"
            placeholder="Menge Zutat 1"
          />
          <input
            type="text"
            name="Ingredient-2"
            id="Ingredient-2"
            className="create-product-ingredient"
            placeholder="Zutat 2"
          />
          <input
            type="text"
            name="quantity-ingredient-2"
            id="quantity-ingredient-2"
            className="create-product-quantity-ingredient"
            placeholder="Menge Zutat 2"
          />
          <input
            type="text"
            name="Ingredient-3"
            id="Ingredient-3"
            className="create-product-ingredient"
            placeholder="Zutat 3"
          />
          <input
            type="text"
            name="quantity-ingredient-3"
            id="quantity-ingredient-3"
            className="create-product-quantity-ingredient"
            placeholder="Menge Zutat 3"
          />
          <input type="submit" value="Submit" className="create-product-btn" />
        </form>
        <div className="create-product-img-wrapper">
          <img
            className="create-product-img"
            src="/public/cocktail2.jpg"
            alt="cocktail2"
          />
          <img
            className="create-product-img"
            src="/public/cocktail1.jpg"
            alt="cocktail1"
          />

          <img
            className="create-product-img"
            src="/public/cocktail3.jpg"
            alt="cocktail3"
          />
        </div>
      </section>
    </main>
  );
};

export default CreateProduct;
