import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../features/products/productsSlice";

const CartContent = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(productsSelector);

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
