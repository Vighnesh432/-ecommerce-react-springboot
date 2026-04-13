import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
    navigate("/success");
  };

  return (
    <div>
      <h1>Checkout</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>
            ${item.price} × {item.quantity}
          </p>
        </div>
      ))}

      <h2>Total: ${total.toFixed(2)}</h2>

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;