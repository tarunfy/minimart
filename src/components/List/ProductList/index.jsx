//import ProductCard from "../../Cards/ProductCard";

const ProductList = ({ filteredProducts, type }) => {
  return (
    <div className="max-w-[1024px] mx-auto my-10">
      <div className="grid grid-cols-3 gap-6">
        <div className="p-10 bg-red-400">
          <h3>{type}</h3>
        </div>
        <div className="p-10 bg-red-400">
          <h3>{type}</h3>
        </div>
        <div className="p-10 bg-red-400">
          <h3>{type}</h3>
        </div>
        <div className="p-10 bg-red-400">
          <h3>{type}</h3>
        </div>
        <div className="p-10 bg-red-400">
          <h3>{type}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
