import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  };

  return (
    <nav className="flex flex-col sm:flex-row items-center      justify-between px-4 sm:px-8 py-4 shadow-md bg-white gap-4">
      <div className="text-2xl font-bold">
        <Link to="/">ShopEase</Link>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center">
        <Link to="/">Products</Link>
        <Link to="/cart">Cart</Link>

        {user && (
          <>
            <Link to="/add-product">Add Product</Link>
            <Link to="/orders">Orders</Link>
          </>
        )}

        {user ? (
          <>
            <span className="font-medium">
              Welcome, {user.name}
            </span>
            <button
              onClick={logout}
              className="px-4 py-2 border rounded-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;