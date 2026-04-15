import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Link to="/">Products</Link> |{" "}
      <Link to="/cart">Cart</Link> |{" "}
      {user && <Link to="/orders">Orders</Link>} |{" "}
      {user ? (
        <>
          <span>Welcome, {user.name}</span> |{" "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/signup">Signup</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;