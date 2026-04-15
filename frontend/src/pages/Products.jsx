import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";

function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    alert(`${product.name} added to cart`);
  };

  const deleteProduct = async (id) => {
    const response = await fetch(
      `http://localhost:8080/api/products/${id}`,
      {
        method: "DELETE"
      }
    );

    if (response.ok) {
      alert("Product deleted successfully");
      fetchProducts();
    } else {
      alert("Delete failed");
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <Link to="/cart">Go to Cart ({cart.length})</Link>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;