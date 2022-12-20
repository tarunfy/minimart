import { useSelector } from "react-redux";
import { productsSelector } from "../../../features/products/productsSlice";

const Checkout = () => {
  const { cart } = useSelector(productsSelector);
  return <div>Checkout</div>;
};

export default Checkout;
