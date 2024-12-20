import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
