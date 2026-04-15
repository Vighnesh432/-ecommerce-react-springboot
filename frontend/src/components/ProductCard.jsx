import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const { product, addToCart, deleteProduct } = props;
  const navigate = useNavigate();

  if (!product) return null;

  return (
    <div className="border rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">
        {product.name}
      </h2>

      <p className="text-gray-600 mb-2">
        {product.description}
      </p>

      <p className="font-semibold mb-2">
        ${product.price}
      </p>

      <p className="mb-4">
        Stock: {product.stock}
      </p>

      <div className="flex flex-col gap-2">
        <button
          className="border rounded-lg py-2"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <button
          className="border rounded-lg py-2"
          onClick={() =>
            navigate("/edit-product", { state: product })
          }
        >
          Edit Product
        </button>

        <button
          className="border rounded-lg py-2"
          onClick={() => deleteProduct(product.id)}
        >
          Delete Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;