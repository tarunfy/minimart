import { IconButton, Tag, Tooltip } from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { formatToCurrency } from "../../../utils/helpers";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../../features/products/productsSlice";

const WishList = ({ likedProducts }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-2">
      {likedProducts.map((p) => (
        <div className="flex items-center p-4 border space-x-3" key={p.id}>
          <div className="h-[100px] min-w-[100px] flex items-center">
            <img
              src={p.image}
              alt={p.title}
              className="max-h-full object-cover"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-base font-Poppins max-w-lg">{p.title}</h1>
              <Tooltip label="remove" hasArrow placement="top">
                <IconButton onClick={() => dispatch(removeFromWishlist(p.id))}>
                  <MdDelete />
                </IconButton>
              </Tooltip>
            </div>
            <div className="flex items-start space-x-1">
              <Tag colorScheme="green" size="sm">
                {p.rating.rate} <AiTwotoneStar className="inline" />
              </Tag>
              <p className="inline ml-2 text-gray-500 text-sm">
                ({p.rating.count})
              </p>
            </div>
            <h2 className="text-sm font-Poppins font-semibold my-3">
              {formatToCurrency.format(p.price)}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishList;
