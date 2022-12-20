import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../../features/products/productsSlice";
import { formatToCurrency } from "../../../utils/helpers";

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
    <div className="border shadow-md rounded-md p-2">
      <div>
        <h1 className="text-2xl font-bold font-Poppins">Summary</h1>
      </div>
      <p>{formatToCurrency.format(total)}</p>
    </div>
  );
};

export default Checkout;
