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

const WishistModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen} className="relative p-2">
        <FiHeart className="!h-7 !w-7" />
        <div className="cart-num">
          <span className="text-xs">1</span>
        </div>
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              distinctio dicta! Perferendis ea quibusdam temporibus repellendus.
              Officiis nam quis in, et ex ipsa labore placeat quidem optio?
              Eaque, dicta atque?
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WishistModal;
