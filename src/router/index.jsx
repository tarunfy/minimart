import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import ProductInfo from "../pages/ProductInfo";
import Cart from "../pages/Cart";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductInfo />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default router;
