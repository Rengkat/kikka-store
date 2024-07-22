import React, { useContext } from "react";
import Advert from "./Components/Advert";
import FeatureProducts from "./Components/FeautureProduct";
import Hero from "./Components/Hero";
import { GeneralContext } from "../../Contexts/GeneralContext";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const { products } = useContext(GeneralContext);
  const productsArray = products?.products;
  const firstFour = productsArray?.slice(0, 4);
  const secondFour = productsArray?.slice(4, 8);

  return (
    <div>
      <Hero />
      <FeatureProducts featureProducts={firstFour} title="RECENT PRODUCTS" />
      <Advert />
      <FeatureProducts featureProducts={secondFour} title="HOT PRODUCTS" />
    </div>
  );
}

export default Home;
