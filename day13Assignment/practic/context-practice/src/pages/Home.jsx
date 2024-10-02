import React, { useEffect, useState } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import Crousel from "../components/Crousel";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();
  return (
    <div className="w-full flex flex-col gap-4 pt-12">
      <div className="w-full h-[50vh] mx-auto">
        <Crousel />
      </div>
      <FeaturedProducts products={products} />
    </div>
  );
};

export default Home;
