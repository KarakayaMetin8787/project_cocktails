import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import ProductCategoryList from "./pages/ProductCategoryList/ProductCategoryList";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductCategoryList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
