import React from "react";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import Crousel from "../components/Crousel";

const Home = () => {
  return (
    <div className="w-ful flex flex-col">
      {/* <Crousel /> */}
      <FeaturedProducts />
    </div>
  );
};

export default Home;
