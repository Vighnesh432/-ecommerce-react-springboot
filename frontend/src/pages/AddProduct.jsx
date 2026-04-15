import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    stock: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleAddProduct = async () => {
    const response = await fetch(
      "http://localhost:8080/api/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }
    );

    if (response.ok) {
      alert("Product added successfully!");
      navigate("/");
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <h1>Add Product</h1>

      <input
        name="name"
        placeholder="Product Name"
        onChange={handleChange}
      />
      <br />

      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <br />

      <input
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />
      <br />

      <input
        name="imageUrl"
        placeholder="Image URL"
        onChange={handleChange}
      />
      <br />

      <input
        name="stock"
        placeholder="Stock"
        onChange={handleChange}
      />
      <br />

      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default AddProduct;