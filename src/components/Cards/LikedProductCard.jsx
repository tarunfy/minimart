import { IconButton, Tag, Tooltip } from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../features/products/productsSlice";
import { formatToCurrency } from "../../utils/helpers";
import { userSelector } from "../../features/user/userSlice";

const LikedProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(userSelector);
  return (
    <li
      className="flex items-center p-4 border space-x-3 rounded-md"
      key={product.id}
    >
      <div className="h-[100px] min-w-[100px] flex items-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-cover"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-base font-Poppins max-w-lg">{product.title}</h1>
          <Tooltip label="remove" hasArrow placement="top">
            <IconButton
              disabled={!isLoggedIn}
              onClick={() => dispatch(removeFromWishlist(product.id))}
            >
              <MdDelete />
            </IconButton>
          </Tooltip>
        </div>
        <div className="flex items-start space-x-1">
          <Tag colorScheme="green" size="sm">
            {product.rating.rate} <AiTwotoneStar className="inline" />
          </Tag>
          <p className="inline ml-2 text-gray-500 text-sm">
            ({product.rating.count})
          </p>
        </div>
        <h2 className="text-sm font-Poppins font-semibold my-3">
          {formatToCurrency.format(product.price)}
        </h2>
      </div>
    </li>
  );
};

export default LikedProductCard;
