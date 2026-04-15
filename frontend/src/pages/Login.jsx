import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    const response = await fetch(
      "http://localhost:8080/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    );

    if (response.ok) {
      const data = await response.json();

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(data)
      );

      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border shadow-md rounded-2xl p-8 w-96">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          className="border w-full px-4 py-2 rounded-lg mb-4"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          className="border w-full px-4 py-2 rounded-lg mb-4"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button
          className="w-full border rounded-lg py-2"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;