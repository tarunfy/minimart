import { FaShoppingCart } from "react-icons/fa";

const CartContent = () => {
  return (
    <div className="col-span-3 w-full">
      <h1 className="font-Poppins text-4xl tracking-tighter font-bold text-gray-800">
        Your Cart <FaShoppingCart className="inline ml-1" />
      </h1>
      <div></div>
    </div>
  );
};

export default CartContent;
