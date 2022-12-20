import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { productsSelector } from "../../features/products/productsSlice";
import CartListItem from "../Items/CartListItem";

const CartContent = () => {
  const { cart } = useSelector(productsSelector);
  const uniqueCart = cart.filter(
    (item, index, self) => self.findIndex((t) => t.id === item.id) === index
  );
  return (
    <div className="col-span-3 w-full border rounded-md space-y-5 bg-white shadow-md">
      <div className="p-4">
        <h1 className="font-Poppins text-4xl tracking-tighter font-bold text-gray-800">
          Your Cart <FaShoppingCart className="inline ml-1" />
        </h1>
      </div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {uniqueCart.map((p) => (
              <CartListItem p={p} key={p.id} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CartContent;
