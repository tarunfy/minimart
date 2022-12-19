import { Button, Center, Spinner, Tag } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { myAxios } from "../../api/config";
import { AiTwotoneStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/List/ProductList";
import { useSelector } from "react-redux";
import { productsSelector } from "../../features/products/productsSlice";
import { formatToCurrency } from "../../utils/helpers";

const productInfo = () => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const { products } = useSelector(productsSelector);

  useEffect(() => {
    async function getProductInfo() {
      try {
        const res = await myAxios.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsFetching(false);
      }
    }
    getProductInfo();
  }, [id]);

  useEffect(() => {
    const filteredData = products.filter(
      (p) => p.category === product?.category && p.id !== product?.id
    );
    setSimilarProducts(filteredData);
  }, [product]);

  if (error) {
    return (
      <Center h="100vh" w="100vw">
        <p className="text-xl text-red-500 font-Poppins">{error}</p>
      </Center>
    );
  }
  if (isFetching) {
    return (
      <Center h="100vh" w="100vw">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-[1024px] mx-auto  mt-20">
        {/* left */}
        <div className="flex space-x-10 justify-between items-start">
          <div className="h-[300px] min-w-[300px] flex items-center">
            <img
              src={product?.image}
              alt={product?.title}
              className="max-h-full object-cover mt-10"
            />
          </div>

          {/* right */}
          <div className="pt-10">
            <h5 className="px-2 py-1 bg-gradient-to-tr from-lime-400 to-green-600 text-white font-medium mb-2 text-sm font-Poppins w-fit rounded-lg">
              {product?.category}
            </h5>
            <h1 className="text-3xl font-bold font-Poppins mb-1">
              {product?.title}
            </h1>
            <Tag colorScheme="green">
              {product?.rating.rate} <AiTwotoneStar className="inline" />
            </Tag>
            <p className="inline ml-2 text-gray-500 text-sm">
              ({product?.rating.count})
            </p>
            <h2 className="text-xl font-Poppins font-semibold my-3">
              {formatToCurrency.format(product?.price)}
            </h2>
            <p className="text-gray-500 font-Poppins">{product?.description}</p>
            <div className="mt-3 space-x-1">
              <Button
                leftIcon={<FaShoppingCart />}
                colorScheme="red"
                variant="solid"
              >
                Add to cart
              </Button>
              <Button
                leftIcon={<BsLightningFill />}
                colorScheme="orange"
                variant="solid"
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
        <h1 className="mt-20 font-Poppins font-semibold text-xl">
          Similar Products
        </h1>
        <ProductList filteredProducts={similarProducts} />
      </div>
    </div>
  );
};

export default productInfo;
