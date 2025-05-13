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
import Collection from "./pages/Collection";
import SingleCollection from "./pages/SingleCollection";
import AdminQueryReply from "./Admin/AdminQueryReply";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/singlecollection" element={<SingleCollection />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminproduct" element={<AdminProduct />} />
          <Route path="/adminquery" element={<AdminQuery />} />
          <Route path="/addadminproducts" element={<AddProductadmin />} />
          <Route
            path="/adminproductupdate/:id"
            element={<AdminProductUpdate />}
          />
          <Route path="/adminqueryreply/:id" element={<AdminQueryReply />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
