function ProductCard({ product, addToCart }) {
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
    </div>
  );
}

export default ProductCard;