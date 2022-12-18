import ProductCard from "../../Cards/ProductCard";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
};

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
    <div>
      <div className="max-w-[1024px] mx-auto  py-20">
        <Slider {...settings}>
          {data.map((d) => (
            <ProductCard product={d} key={d.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AllProducts;
