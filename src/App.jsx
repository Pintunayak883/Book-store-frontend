import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard";
import AddProduct from "./Components/AddProduct";
import UpdateBook from "./Components/UpdateBook";
import Cart from "./Components/Cart";
import OrderPage from "./Pages/OrderPage";

const App = () => {
  const user = JSON.parse(localStorage.getItem("User"));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={user ? <Books /> : <Navigate to={"/"} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<UpdateBook />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
