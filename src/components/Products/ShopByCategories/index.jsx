import { Button, ButtonGroup, Center } from "@chakra-ui/react";
import { FaMale, FaFemale } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";

const ShopByCategories = () => {
  return (
    <div>
      <h1 className="text-3xl font-Poppins font-bold mb-5 text-center">
        Shop by Categories
      </h1>
      <Center>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button leftIcon={<FaMale />}>Men Clothings</Button>
          <Button leftIcon={<FaFemale />}>Women Clothings</Button>
          <Button leftIcon={<ImHeadphones />}>Electronics</Button>
          <Button leftIcon={<GiBigDiamondRing />}>Jewelleries</Button>
        </ButtonGroup>
      </Center>
    </div>
  );
};

export default ShopByCategories;
