import { Button, IconButton, Td, Tr } from "@chakra-ui/react";
import { formatToCurrency } from "../../utils/helpers";
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import {
  addToCart,
  removeFromCart,
} from "../../features/products/productsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CartListItem = ({ p }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
    dispatch(addToCart(p.id));
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(p.id));
      return;
    }
    setQuantity((prev) => prev - 1);
  };
  return (
    <Tr>
      {/* Product */}
      <Td>
        <div className="h-[70px] min-w-[70px]">
          <img
            src={p.image}
            alt={p.title}
            className="max-h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-medium text-sm font-Poppins">{p.title}</h2>
        </div>
      </Td>
      {/* Price */}
      <Td>
        <span className="font-medium">
          {formatToCurrency.format(p.price * quantity)}
        </span>
      </Td>
      {/* Quantity */}
      <Td>
        <div className="flex items-center space-x-1">
          <IconButton onClick={incrementQuantity}>
            <MdAdd />
          </IconButton>
          <span>{quantity}</span>
          <IconButton onClick={decrementQuantity}>
            <RiSubtractLine />
          </IconButton>
        </div>
      </Td>
      {/* Remove */}
      <Td>
        <Button
          colorScheme="red"
          onClick={() => dispatch(removeFromCart(p.id))}
        >
          Remove
        </Button>
      </Td>
    </Tr>
  );
};

export default CartListItem;
