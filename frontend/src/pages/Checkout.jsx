import { useNavigate } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    const orderData = {
      userEmail: user.email,
      totalAmount: total
    };

    const response = await fetch(
      "http://localhost:8080/api/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
      }
    );

    if (response.ok) {
      alert("Order placed successfully!");
      setCart([]);
      navigate("/success");
    } else {
      alert("Failed to place order");
    }
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