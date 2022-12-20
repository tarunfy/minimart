import { Button } from "@chakra-ui/react";
import CartContent from "../../components/Cart";
import Checkout from "../../components/Cart/Checkout";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const cart = () => {
  return (
    <div className="max-w-[1024px] mx-auto min-h-screen flex justify-center items-start flex-col space-y-6">
      <Link to="/">
        <Button className="!font-Poppins" leftIcon={<BsArrowLeft />}>
          Go Home
        </Button>
      </Link>
      <CartContent />
      <Checkout />
    </div>
  );
};

export default cart;
