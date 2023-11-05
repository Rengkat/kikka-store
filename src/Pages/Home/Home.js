import React, { useContext } from "react";
import Advert from "./Components/Advert";
import FeatureProducts from "./Components/FeautureProduct";
import Hero from "./Components/Hero";
import { GeneralContext } from "../../Contexts/GeneralContext";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const featureProducts = products?.filter((featureProduct) => featureProduct.featured);
  const firstFour = featureProducts.slice(0, 4);
  const secondFour = featureProducts.slice(4, 8);
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      const data = await fetch("https://course-api.com/react-store-products");
      const response = await data.json();
      setProducts(response);
    };
    fetchData();
  }, []);
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
