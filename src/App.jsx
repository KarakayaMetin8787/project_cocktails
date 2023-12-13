import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { SearchFetchContext } from "./Context/Context";
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";

function App() {

const [searchName, setSearchName] = useState([]);

  return (
    <div>
      <BrowserRouter>
      <SearchFetchContext.Provider value={{ searchName, setSearchName }}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      <Footer />
      </SearchFetchContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
