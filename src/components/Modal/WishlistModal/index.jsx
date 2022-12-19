import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../../features/products/productsSlice";
import WishList from "../../List/Wishlist";
import { clearWishList } from "../../../features/products/productsSlice";

const WishistModal = () => {
  const { likedProducts } = useSelector(productsSelector);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen} className="relative p-2">
        <FiHeart className="!h-7 !w-7" />
        {likedProducts.length > 0 && (
          <div className="cart-num">
            <span className="text-xs">{likedProducts.length}</span>
          </div>
        )}
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="!min-w-[800px] !max-h-[600px] overflow-scroll">
          <ModalHeader>Your wishlist({likedProducts.length})</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {likedProducts.length > 0 ? (
              <WishList likedProducts={likedProducts} />
            ) : (
              "Oops nothing here..."
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              disabled={!likedProducts.length}
              onClick={() => dispatch(clearWishList())}
              variant="solid"
              colorScheme="blue"
            >
              Clear whislist
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WishistModal;
