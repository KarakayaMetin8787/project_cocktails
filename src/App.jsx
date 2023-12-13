import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import CreateProduct from "./pages/CreateProduct/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/createProduct" element={<CreateProduct />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
