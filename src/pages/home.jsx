import Benifits from "../components/Benifits";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AllProducts from "../components/Products/AllProducts";

const home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benifits />
      <AllProducts />
    </main>
  );
};

export default home;
