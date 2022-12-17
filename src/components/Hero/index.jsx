import Typewriter from "typewriter-effect";
import Img1 from "../../assets/landing.png";
import Img2 from "../../assets/landing2.png";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1024px] mx-auto min-h-[650px] flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="font-Poppins text-gray-900 leading-[3rem] font-bold text-4xl">
            Indulge in the finest <br />
            <Typewriter
              options={{
                strings: ["Jewelleries", "Clothings", "Electronics"],
                autoStart: true,
                loop: true,
              }}
            />
            at unbeatable <br /> prices.
          </h1>
          <p className="my-4 text-sm font-Poppins text-gray-600 max-w-sm">
            Shop the latest brand items at unbeatable prices. Rebrand your
            collections now!
          </p>
          <button className="btn-primary text-xl">Shop Now</button>
        </div>

        {/* Right */}
        <div className="relative  min-h-[600px] flex items-center ml-10">
          <div className="h-[300px] absolute -left-28 top-10 w-[400px] rounded-lg -rotate-[20deg] scale-[.7] shadow-2xl">
            <img
              src={Img1}
              alt="shopping"
              className="max-h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="h-[350px] w-[400px] rounded-lg scale-[0.65]  rotate-12 shadow-2xl">
            <img
              src={Img2}
              alt="shopping"
              className="max-h-full min-w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
