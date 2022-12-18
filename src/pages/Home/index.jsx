import Benifits from "../../components/Benifits";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";

const home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benifits />
      <Products />
    </main>
  );
};

export default home;
