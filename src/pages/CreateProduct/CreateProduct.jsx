import { useContext, useEffect, useState } from "react";
import "./CreateProduct.scss";
import { CreateProductContext } from "../../Context/Context";
import { v4 as uuidv4 } from "uuid";

const CreateProduct = () => {
  const { createProduct, setCreateProduct } = useContext(CreateProductContext);

  // Verwendung von useState, um den Zustand von productData zu verwalten
  const [productData, setProductData] = useState({
    id: 0,
    name: "",
    category: "",
    imgURL: "",
    instruction: "",
    ingredients: [{ ingredient: "", quantity: null }],
  });

  useEffect(() => {}, [createProduct, productData]);

  const handleCreateProductChange = (e) => {
    const { id, value } = e.target;
    let newData = { ...productData };

    // Aktualisieren von newData basierend auf der Eingabe
    switch (id) {
      case "name":
      case "category":
      case "imgURL":
      case "instruction":
        newData[id] = value;
        break;
      default:
        if (
          id.startsWith("ingredient-") ||
          id.startsWith("quantity-ingredient-")
        ) {
          const index = parseInt(id.split("-").pop()) - 1;
          const key = id.startsWith("ingredient-") ? "ingredient" : "quantity";

          if (!newData.ingredients[index]) {
            newData.ingredients[index] = { ingredient: "", quantity: null };
          }

          newData.ingredients[index][key] =
            key === "quantity" ? parseInt(value) : value;
        }
        break;
    }
    newData.id = uuidv4();

    setProductData(newData); // Aktualisieren des Zustands von productData
  };

  const handleSubmit = (e) => {
    if (e.target.value === "") {
      return;
    }
    e.preventDefault();
    setCreateProduct([...createProduct, productData]);
    localStorage.setItem(
      "createdProducts",
      JSON.stringify([...createProduct, productData])
    );

    const inputs = document.querySelectorAll(".create-product-form input");
    const textarea = document.querySelector("textarea");
    console.log(inputs);
    console.log(textarea);
    inputs.forEach((input) => {
      console.log(input.value);
      // const index = 0;
      if (input.value) {
        input.value = "";
      }
    });
    textarea.value = "";

    // Zurücksetzen von productData
    setProductData({
      name: "",
      category: "",
      imgURL: "",
      instruction: "",
      ingredients: [{ ingredient: "", quantity: null }],
    });
  };

  return (
    <main className="section-create-product container">
      <h2 className="create-product-headline">
        Füge deine eigenen Getränke hinzu!
      </h2>
      <section className="create-product-content">
        <form className="create-product-form">
          <input
            type="text"
            name="name"
            id="name"
            className="create-product-name"
            placeholder="Name"
            // value={productData.name}
            onChange={handleCreateProductChange}
            required
          />
          <input
            type="text"
            name="category"
            id="category"
            className="create-product-category"
            placeholder="Kategorie"
            // value={productData.category}
            onChange={handleCreateProductChange}
            required
          />
          <input
            type="text"
            name="imgURL"
            id="imgURL"
            className="create-product-img-url"
            placeholder="Bild URL"
            // value={productData.imgURL}
            onChange={handleCreateProductChange}
            required
          />
          <textarea
            name="instruction"
            id="instruction"
            cols="30"
            rows="10"
            className="create-product-instruction"
            placeholder="Anleitung"
            // value={productData.instruction}
            onChange={handleCreateProductChange}
            required
          ></textarea>
          <input
            type="text"
            name="ingredient-1"
            id="ingredient-1"
            className="create-product-ingredient"
            placeholder="Zutat 1"
            // value={productData.ingredients[0].ingredient}
            onChange={handleCreateProductChange}
            required
          />
          <input
            type="number"
            name="quantity-ingredient-1"
            id="quantity-ingredient-1"
            className="create-product-quantity-ingredient"
            placeholder="Menge Zutat 1"
            // value={productData.ingredients[0].quantity}
            onChange={handleCreateProductChange}
            required
          />
          <input
            type="text"
            name="ingredient-2"
            id="ingredient-2"
            className="create-product-ingredient"
            placeholder="Zutat 2"
            // value={productData.ingredients[0].ingredient}
            onChange={handleCreateProductChange}
            required
          />
          <input
            type="number"
            name="quantity-ingredient-2"
            id="quantity-ingredient-2"
            className="create-product-quantity-ingredient"
            placeholder="Menge Zutat 2"
            // value={productData.ingredients[0].quantity}
            onChange={handleCreateProductChange}
            required
          />
          <input
            type="text"
            name="ingredient-3"
            id="ingredient-3"
            className="create-product-ingredient"
            placeholder="Zutat 3"
            // value={productData.ingredients[0].ingredient}
            onChange={handleCreateProductChange}
            required
          />
          <input
            type="number"
            name="quantity-ingredient-3"
            id="quantity-ingredient-3"
            className="create-product-quantity-ingredient"
            placeholder="Menge Zutat 3"
            // value={productData.ingredients[0].quantity}
            onChange={handleCreateProductChange}
            required
          />
          <input
            type="submit"
            value="Submit"
            className="create-product-btn"
            onClick={handleSubmit}
          />
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
