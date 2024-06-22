import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import About from "./components/About";
import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [favorites, setFavorites] = useState([]);

  function onFavorite(item) {
    setFavorites((prevValues) => {
      return [...prevValues, item];
    });
  }
  console.log(favorites);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop favorite={onFavorite} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart favorites={favorites} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
