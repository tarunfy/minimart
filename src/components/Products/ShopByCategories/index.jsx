import { Button, ButtonGroup, Center } from "@chakra-ui/react";
import { useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import ProductList from "../../List/ProductList";

const ShopByCategories = () => {
  const [filterType, setFilterType] = useState("Men's Clothing");
  return (
    <div>
      <h1 className="text-3xl font-Poppins font-bold mb-5 text-center">
        Shop by Categories
      </h1>
      <Center>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            name="Men's Clothing"
            leftIcon={<FaMale />}
            disabled={filterType === "Men's Clothing"}
          >
            Men's Clothing
          </Button>
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            name="Women's Clothing"
            disabled={filterType === "Women's Clothing"}
            leftIcon={<FaFemale />}
          >
            Women's Clothing
          </Button>
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            name="Electronics"
            disabled={filterType === "Electronics"}
            leftIcon={<ImHeadphones />}
          >
            Electronics
          </Button>
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            name="Jewelleries"
            disabled={filterType === "Jewelleries"}
            leftIcon={<GiBigDiamondRing />}
          >
            Jewelleries
          </Button>
        </ButtonGroup>
      </Center>
      <ProductList type={filterType} />
    </div>
  );
};

export default ShopByCategories;
