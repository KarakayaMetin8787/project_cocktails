import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import {
  SearchFetchContext,
  GoBackButtonContext,
  CreateProductContext,
} from "./Context/Context";
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import ProductCategoryList from "./pages/ProductCategoryList/ProductCategoryList";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  const [searchName, setSearchName] = useState([]);
  const [goBackURL, setgoBackURL] = useState("");
  const [createProduct, setCreateProduct] = useState([
    {
      name: "",
      category: "",
      imgURL: "",
      instruction: "",
      ingredients: [{ ingredient: "", quantity: null }],
    },
  ]);

  console.log(createProduct);

  return (
    <BrowserRouter>
      <GoBackButtonContext.Provider value={{ goBackURL, setgoBackURL }}>
        <SearchFetchContext.Provider value={{ searchName, setSearchName }}>
          <CreateProductContext.Provider
            value={{ createProduct, setCreateProduct }}
          >
            <div className="">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/products/product-details/:id"
                  element={<ProductDetails />}
                />
                <Route path="/createProduct" element={<CreateProduct />} />
                <Route
                  path="/products/:category"
                  element={<ProductCategoryList />}
                />
                <Route path="/productlist" element={<ProductList />} />
              </Routes>
              <Footer />
            </div>
          </CreateProductContext.Provider>
        </SearchFetchContext.Provider>
      </GoBackButtonContext.Provider>
    </BrowserRouter>
  );
}

export default App;
