import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../../features/products/productsSlice";
import { formatToCurrency } from "../../../utils/helpers";
import { FaCheckCircle } from "react-icons/fa";

const Checkout = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector(productsSelector);

  useEffect(() => {
    setTotal(0);
    let sum = 0;
    const priceArray = cart.map((p) => p.price);
    priceArray.forEach((val) => {
      sum = sum + val;
    });
    setTotal(sum);
  }, [cart]);

  return (
    <div className="border shadow-md rounded-sm font-Poppins p-5 min-w-[400px]">
      <div className="border-b pb-2">
        <h1 className="text-2xl font-bold ">Summary</h1>
      </div>
      <div className="flex items-center justify-between my-4">
        <h3 className="font-medium uppercase">Items</h3>
        <span>{cart.length}</span>
      </div>
      <div className="flex items-center justify-between my-4">
        <h3 className="font-medium uppercase">Shipping</h3>
        <span className="text-green-500">Free</span>
      </div>
      <div className="flex items-center justify-between my-4">
        <h3 className="font-medium uppercase">Subtotal</h3>
        <span>{formatToCurrency.format(total)}</span>
      </div>
      <button className="w-full flex items-center justify-center p-3 bg-green-500 text-white font-semibold hover:opacity-95 transition shadow-sm">
        <FaCheckCircle className="mr-1" /> Checkout
      </button>
    </div>
  );
};

export default Checkout;
