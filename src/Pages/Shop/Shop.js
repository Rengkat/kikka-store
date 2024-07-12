import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "../../Components/Sinners/ProductSiner";
import { GeneralContext } from "../../Contexts/GeneralContext";
import Products from "./Products";
import { BreedingRhombusSpinner } from "react-epic-spinners";

function Shop() {
  const { products } = useContext(GeneralContext);
  const mainProducts = products?.products;
  const [loading, setLoading] = useState(false);
  const [categorisedProducts, setCategorisedProducts] = useState([]);
  const [categories, setCategories] = useState(["all"]);
  const handleFilter = (category) => {
    setCategorisedProducts(
      category === "all"
        ? mainProducts
        : mainProducts?.filter((product) => product.category === category)
    );
  };
  useEffect(() => {
    const uniqueCategories = ["all", ...new Set(mainProducts?.map((product) => product.category))];
    setCategories(uniqueCategories);
  }, []);

  return (
    <div className="w-[95%] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 mt-10">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => handleFilter(category)}
                className="border-2 hover:bg-yellow-700 transition-all ease-linear duration-300 hover:text-white border-yellow-700 w-full h-[5rem] text-yellow-700 py-2 px-3 font-bold rounded-md shadow uppercase">
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
          {categorisedProducts?.map((product) => {
            return (
              <main key={product._id} className="shadow p-3 hover:shadow-lg border-2">
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
