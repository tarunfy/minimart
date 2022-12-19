import { IoBagRemove } from "react-icons/io5";

const CartContent = () => {
  return (
    <div>
      <h1 className="font-Poppins text-4xl tracking-tighter font-bold">
        Your Bag <IoBagRemove className="inline" />
      </h1>
    </div>
  );
};

export default CartContent;
