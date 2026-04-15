import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditProduct() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState(state);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    const response = await fetch(
      `http://localhost:8080/api/products/${product.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }
    );

    if (response.ok) {
      alert("Product updated successfully");
      navigate("/");
    } else {
      alert("Update failed");
    }
  };

  return (
    <div>
      <h1>Edit Product</h1>

      <input
        name="name"
        value={product.name}
        onChange={handleChange}
      />
      <br />

      <input
        name="description"
        value={product.description}
        onChange={handleChange}
      />
      <br />

      <input
        name="price"
        value={product.price}
        onChange={handleChange}
      />
      <br />

      <input
        name="imageUrl"
        value={product.imageUrl}
        onChange={handleChange}
      />
      <br />

      <input
        name="stock"
        value={product.stock}
        onChange={handleChange}
      />
      <br />

      <button onClick={handleUpdate}>Update Product</button>
    </div>
  );
}

export default EditProduct;