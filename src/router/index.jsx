import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import ProductInfo from "../pages/ProductInfo";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductInfo />} />
    </Routes>
  );
};

export default router;
