import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div>
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Thank you for shopping with us.</p>

      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default OrderSuccess;