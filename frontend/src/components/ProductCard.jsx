import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const { product, addToCart, deleteProduct } = props;
  const navigate = useNavigate();

  if (!product) {
    return null;
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
        width: "250px"
      }}
    >
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <br />
      <br />

      <button
        onClick={() =>
          navigate("/edit-product", { state: product })
        }
      >
        Edit Product
      </button>

      <br />
      <br />

      <button onClick={() => deleteProduct(product.id)}>
        Delete Product
      </button>
    </div>
  );
}

export default ProductCard;