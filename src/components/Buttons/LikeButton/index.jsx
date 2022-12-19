import { Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { userSelector } from "../../../features/user/userSlice";

const LikeButton = ({ productId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { isLoggedIn } = useSelector(userSelector);

  return (
    <Tooltip
      hasArrow
      label={
        !isLoggedIn
          ? "Please login to wishlist a product"
          : isLoggedIn && !isLiked
          ? "Add this product to wishlist"
          : "Remove this product from wishlist"
      }
      bg="gray.300"
      color="black"
    >
      <button
        disabled={!isLoggedIn}
        onClick={() => setIsLiked(!isLiked)}
        className="border rounded-full p-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <FiHeart
          className={`h-6 w-6  ${isLiked && "fill-red-500 text-red-500"}`}
        />
      </button>
    </Tooltip>
  );
};

export default LikeButton;
