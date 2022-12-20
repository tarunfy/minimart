import CartContent from "../../components/Cart";
import Checkout from "../../components/Cart/Checkout";

const cart = () => {
  return (
    <div className="max-w-[1024px] mx-auto min-h-screen flex justify-center items-start flex-col space-y-6">
      <CartContent />
      <Checkout />
    </div>
  );
};

export default cart;
