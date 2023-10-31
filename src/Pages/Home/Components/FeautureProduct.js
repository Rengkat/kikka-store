import React, { useContext } from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import { Link } from "react-router-dom";
import { GeneralContext } from "../../../Contexts/GeneralContext";

import {
  FiveStars,
  FourStars,
  FourStarsHalf,
  ThreeStars,
  ThreeStarsHalf,
  TwoStarsHalf,
} from "../../Shop/ShopStar";

const rating = (price) => {
  if (price < 30000) return <TwoStarsHalf />;
  if (price > 30000 && price < 50000) return <ThreeStars />;
  if (price > 50000 && price < 70000) return <ThreeStarsHalf />;
  if (price > 70000 && price < 800000) return <FourStars />;
  if (price > 80000 && price < 900000) return <FourStarsHalf />;
  if (price > 90000) return <FiveStars />;
};
function FeatureProducts({ featureProducts, title }) {
  return (
    <div className="mt-[7rem] mb-32">
      <div className="text-center">
        <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
        <div className="bg-yellow-700 w-[4rem] my-2 h-2 md:my-5 mx-auto" />
        <p className="w-[70%] md:w-[50%] mx-auto py-5 text-xl md:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae asperiores deleniti maiores
          nulla.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-[90%] mx-auto gap-5 md:gap-8 mt-3 ">
        {featureProducts?.map((product) => {
          return (
            <section key={product.id} className="shadow-md border-2 hover:shadow-lg  ">
              {" "}
              <Link to="/shop">
                <img
                  src={product.image}
                  alt="Image"
                  className="h-[20vh] md:h-[40vh] object-cover images w-full"
                />

                <div className="detali text-center p-3 md:pt-5 md:pb-8 ">
                  <h1 className="font-semibold text-xl md:text-2xl capitalize ">{product.name}</h1>
                  {rating(product.price)}
                  <p className="font-smibold text-2xl">${product.price.toLocaleString()}</p>
                </div>
              </Link>
            </section>
          );
        })}
      </div>{" "}
    </div>
  );
}

export default FeatureProducts;
