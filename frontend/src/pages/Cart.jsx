import { Link } from "react-router-dom";

function Cart({ cart }) {
  return (
    <div>
      <h1>Your Cart</h1>
      <Link to="/">Back to Products</Link>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
