import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Products cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;