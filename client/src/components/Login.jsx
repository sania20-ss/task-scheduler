import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Links } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Blogs from "./Blogs";

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
    <div className="min-h-screen bg-gray-100 text-white">
      <nav className="text-white bg-gray-700 h-14 w-full  flex justify-around p-4  gradient-text  shadow-white shadow-2xl">
        <h1 className="text-3xl font-bold  font-serif  ">Taskify</h1>
        <div className=" text-1xl flex justify-between gap-20 italic font-semibold">
        <a  className=" hover:text-red-900" href="/home">Home</a>
        <a  className=" hover:text-red-900" href="/about">About</a>
        <a  className=" hover:text-red-900" href="/contact">Contact</a>
        <a  className=" hover:text-red-900" href="/blogs">Blogs</a>
        </div>
      </nav>
   
    <div className="flex justify-around items-center h-full bg-gradient-to-r from-white to-slate-200">
      <div className="bg-gray-700 shadow-lg shadow-black p-8 rounded  max-w-md w-full ">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
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
      <div>
       <img  className=" w-80 mt-9 shadow-slate-950 shadow-xl" src="https://i.pinimg.com/736x/d6/37/22/d63722fd8cd838b30d9868dc159b9da8.jpg" alt="" />
      </div>
     
     </div>
  </div>
  );
};

export default Login;
