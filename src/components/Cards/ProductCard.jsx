import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="border p-4 mr-2 rounded-md">
        <div className="space-y-1">
          <img
            src={product.image}
            alt={product.title}
            className="h-[150px] w-full object-contain"
          />
          <h3 className="text-center max-w-[15rem] mx-auto font-Poppins truncate">
            {product.title}
          </h3>
          <p className="text-center font-medium text-sm text-lime-600">
            {product.category}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
