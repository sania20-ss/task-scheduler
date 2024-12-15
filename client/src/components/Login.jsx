import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-700 p-8 rounded shadow-lg max-w-md w-full">
        <h1 className="text-2xl text-red-700 font-bold mb-4 text-center">Login</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-600 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-600 text-white"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 py-3 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
