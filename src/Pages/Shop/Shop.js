import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "../../Components/Sinners/ProductSiner";
import { GeneralContext } from "../../Contexts/GeneralContext";
import Products from "./Products";
import { BreedingRhombusSpinner } from "react-epic-spinners";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categorisedProducts, setCategorisedProducts] = useState([]);
  const [categories, setCategories] = useState(["all"]);

  const handleFilter = (category) => {
    setCategorisedProducts(
      category === "all" ? products : products.filter((product) => product.category === category)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch("https://course-api.com/react-store-products", {
        mode: "no-cors",
      });
      const response = await data.json();
      setProducts(response);
      setLoading(false);

      // Calculate categories after fetching products
      const uniqueCategories = ["all", ...new Set(response.map((product) => product.category))];
      setCategories(uniqueCategories);
      // Initially, display all products
      setCategorisedProducts(response);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[95%] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 mt-10">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => handleFilter(category)}
                className="border-2 hover:bg-yellow-700 transition-all ease-linear duration-300 hover:text-white border-yellow-700 w-full text-yellow-700 py-2 px-3 font-bold rounded-md shadow uppercase">
                {category}
              </button>
            </div>
          );
        })}
      </div>
      {loading ? (
        <div className=" mt-[10rem]">
          <p className="text-yellow-700 font-bold text-2xl text-center">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 mx-auto gap-5 md:gap-8">
          {categorisedProducts.map((product) => {
            return (
              <main key={product.id} className="shadow p-3 hover:shadow-lg border-2">
                <Products product={product} />
              </main>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Shop;
