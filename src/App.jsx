import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../src/components/auth/Authenticate";
import Navbar from "./components/Navbar/Navbar";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kid from "./components/Kid/Kid";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import "./App.css";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      {/* Wrap AuthProvider inside Router */}
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Kid" element={<Kid />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
