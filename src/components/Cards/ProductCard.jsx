import React from "react";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { Badge, Center } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 mr-4 rounded-md hover:border-lime-500 transition-all duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="space-y-1">
          <img
            src={product.image}
            alt={product.title}
            className="h-[150px] w-full object-contain"
          />
          <h3 className="text-center max-w-[15rem] mx-auto font-Poppins truncate">
            {product.title}
          </h3>
          <Center>
            <Badge>{product.category}</Badge>
          </Center>
        </div>
      </Link>
      {/* Add to cart */}
      <div className="flex justify-end">
        <button
          onClick={() => console.log(product.id)}
          className="btn-primary hover:!translate-y-0  text-white rounded-full p-2"
        >
          <BsPlus className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
