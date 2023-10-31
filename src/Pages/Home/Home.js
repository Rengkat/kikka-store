import React, { useContext } from "react";
import Advert from "./Components/Advert";
import FeatureProducts from "./Components/FeautureProduct";
import Hero from "./Components/Hero";
import { GeneralContext } from "../../Contexts/GeneralContext";

function Home() {
  const { products } = useContext(GeneralContext);
  const featureProducts = products?.filter((featureProduct) => featureProduct.featured);
  const firstFour = featureProducts.slice(0, 4);
  const secondFour = featureProducts.slice(4, 8);
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
