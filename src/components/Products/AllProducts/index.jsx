import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../../Carousel";

const AllProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function get() {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    }

    get();
  }, []);
  return (
    <div className="max-w-[1024px] mx-auto py-20">
      <h1 className="text-3xl font-Poppins font-bold mb-5 text-center">
        All Products
      </h1>
      <Carousel products={data} />
    </div>
  );
};

export default AllProducts;
