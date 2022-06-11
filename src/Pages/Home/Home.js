import React from "react";
import Advert from "./Components/Advert";
import FeatureProducts from "./Components/FeautureProduct";
import Hero from "./Components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <FeatureProducts />
      <Advert />
    </div>
  );
}

export default Home;
