import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import About from "./components/About";
import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Favorites from "./components/Favorites";
import { CartProvider } from "./components/CartContext";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [shopFavorites, setShopFavorites] = useState([]);

  function onFavorite(item) {
    setFavorites((prevValues) => {
      return [...prevValues, item];
    });
  }

  function onShopFavorite(item) {
    setShopFavorites((prevValues) => {
      return [...prevValues, item];
    });
  }
  console.log(shopFavorites);

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop favorite={onFavorite} shopFavorite={onShopFavorite} />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart favorites={favorites} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/favorites"
            element={<Favorites hearts={shopFavorites} />}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
