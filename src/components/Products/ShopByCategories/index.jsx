import { Button, ButtonGroup, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaMale, FaFemale } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
import { useSelector } from "react-redux";
import ProductList from "../../List/ProductList";
import { productsSelector } from "../../../features/products/productsSlice";

const ShopByCategories = () => {
  const [filterType, setFilterType] = useState("men's clothing");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { products, isFetching } = useSelector(productsSelector);

  useEffect(() => {
    const filteredData = products.filter((p) => p.category === filterType);
    setFilteredProducts(filteredData);
  }, [filterType, products]);

  if (isFetching) {
    return (
      <Center>
        <Spinner size="lg" />
      </Center>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-Poppins font-bold mb-5 text-center">
        Shop by Categories
      </h1>
      <Center>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            className="!font-Poppins"
            name="men's clothing"
            leftIcon={<FaMale />}
            disabled={filterType === "men's clothing"}
          >
            Men's Clothing
          </Button>
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            className="!font-Poppins"
            name="women's clothing"
            disabled={filterType === "women's clothing"}
            leftIcon={<FaFemale />}
          >
            Women's Clothing
          </Button>
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            className="!font-Poppins"
            name="electronics"
            disabled={filterType === "electronics"}
            leftIcon={<ImHeadphones />}
          >
            Electronics
          </Button>
          <Button
            onClick={(e) => setFilterType(e.target.name)}
            className="!font-Poppins"
            name="jewelery"
            disabled={filterType === "jewelery"}
            leftIcon={<GiBigDiamondRing />}
          >
            Jewelleries
          </Button>
        </ButtonGroup>
      </Center>
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
};

export default ShopByCategories;
