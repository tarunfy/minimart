import { Button, IconButton, Td, Tr } from "@chakra-ui/react";
import { formatToCurrency } from "../../utils/helpers";
import { MdAdd } from "react-icons/md";
import { RiSubtractLine } from "react-icons/ri";
import {
  addToCart,
  productsSelector,
  removeFromCart,
} from "../../features/products/productsSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateCart } from "../../features/products/productsSlice";

const CartListItem = ({ p }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { cart } = useSelector(productsSelector);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
    dispatch(addToCart(p.id));
  };

  const decrementQuantity = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(p.id));
      return;
    }
    const filteredArray = cart.filter((product) => product.id === p.id);
    const filteredArray2 = cart.filter((product) => product.id !== p.id);
    filteredArray.splice(-1, 1);

    dispatch(updateCart(filteredArray.concat(filteredArray2)));
    setQuantity((prev) => prev - 1);
  };
  return (
    <Tr>
      {/* Product */}
      <Td>
        <Link to={`/products/${p.id}`}>
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
        </Link>
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
