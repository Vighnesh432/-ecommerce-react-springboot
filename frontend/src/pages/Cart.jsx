import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <Link to="/">Back to Products</Link>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                margin: "10px",
                borderRadius: "8px"
              }}
            >
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>

          <button>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;