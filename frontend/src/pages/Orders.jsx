import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    if (!user) return;

    fetch(`http://localhost:8080/api/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1>Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              margin: "10px",
              borderRadius: "8px"
            }}
          >
            <h3>Order ID: {order.id}</h3>
            <p>Email: {order.userEmail}</p>
            <p>Total: ${order.totalAmount}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;