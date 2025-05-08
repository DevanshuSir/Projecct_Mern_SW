import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from "./Admin/Admin";
import AdminProduct from "./Admin/AdminProduct";
import AdminQuery from "./Admin/AdminQuery";
import AddProductadmin from "./Admin/AddProductsadmin";
import AdminProductUpdate from "./Admin/AdminProductUpdate";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminproduct" element={<AdminProduct />} />
          <Route path="/adminquery" element={<AdminQuery />} />
          <Route path="/addadminproducts" element={<AddProductadmin />} />
          <Route
            path="/adminproductupdate/:id"
            element={<AdminProductUpdate />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
