import React, { useContext } from "react";
import { Spinner } from "../../Components/Sinners/ProductSiner";
import { GeneralContext } from "../../Contexts/GeneralContext";
import Products from "./Products";
import { BreedingRhombusSpinner } from "react-epic-spinners";

function Shop() {
  const { products, loading } = useContext(GeneralContext);
  const categories = [
    "all",
    ...new Set(products.map((categary) => categary.category)),
  ];

  return (
    <div>
      <div className=" hidden  lg:flex justify-center   mt-10">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <button className="border-2 border-yellow-700 w-[10rem]  text-yellow-700 py-2 px-3 font-bold rounded-md shadow uppercase">
                {category}
              </button>
            </div>
          );
        })}
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%]  md:w-[80%] mt-10 mx-auto gap-5 md:gap-8">
          {products &&
            products.map((product) => {
              return (
                <main
                  key={product.id}
                  className=" shadow p-3 hover:shadow-lg border-2">
                  <Products product={product} />
                </main>
              );
            })}
        </div>
      )}
    </div>

    //   <div className="  mx-auto">
    // <div className=" hidden  md:flex   mt-10">
    //   {categories.map((category, index) => {
    //     return (
    //       <div key={index}>
    //         <button className="border-2 border-yellow-700 w-[8rem]  text-yellow-700 py-2 px-3 font-bold rounded-md shadow uppercase">
    //           {category}
    //         </button>
    //       </div>
    //     );
    //   })}
    // </div>
    //     {loading ? (
    //       // <Spinner />
    //       <div className="flex justify-center items-center text-6xl h-[70vh]">
    //         {/* <BreedingRhombusSpinner /> */}
    //       </div>
    //     ) : (
    //       <div className="grid grid-cols-2 gap-5 mx-auto ">
    //         {products.map((product) => {
    //           return (
    //             <main key={product.id}>
    //               <Products product={product} />
    //             </main>
    //           );
    //         })}
    //       </div>
    //     )}
    //   </div>
  );
}

export default Shop;
