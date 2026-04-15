import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const fetchProducts = () => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  };

  const deleteProduct = async (id) => {
    const response = await fetch(
      `http://localhost:8080/api/products/${id}`,
      {
        method: "DELETE"
      }
    );

    if (response.ok) {
      fetchProducts();
    }
  };

  const filteredProducts = products
    .filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">
        Products
      </h1>

      <div className="flex gap-4 mb-8">
        <input
          className="border px-4 py-2 rounded-lg"
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded-lg"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
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