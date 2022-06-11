import React, { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { SingleProductContext } from "../Contexts/SingleContext";

import { FaTrash } from "react-icons/fa";
function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } =
    useContext(SingleProductContext);

  if (wishlist.length === 0) {
    return (
      <div className="text-center my-[20rem]">
        <h1 className="md:text-2xl font-semibold">
          No item in your wishlist.{" "}
          <Link
            className="bg-yellow-700 py-2 px-4 rounded-md cursor-pointer shadow-md text-white font-semibold capitalize"
            to="/shop">
            shop now
          </Link>{" "}
        </h1>
      </div>
    );
  }
  return (
    <div className="mb-[20rem]">
      <div className="w-[95%] md:w-[70%] mx-auto">
        {wishlist.map((item) => {
          return (
            <main
              key={item.id}
              className="flex justify-between items-center my-5 shadow-sm rounded-md p-2 md:p-5 border-2 border-gray-100">
              <div className="flex space-x-5">
                <img
                  src={item.image || item?.images[0].url}
                  alt="Image"
                  className=" object-cover h-28 w-36 md:h-36 md:w-56"
                />
                <div className="info">
                  <h1 className=" md:text-xl font-semibold capitalize">
                    {item.name}
                  </h1>
                  <h1 className="md:text-xl font-semibold text-yellow-700">
                    ${item.price.toLocaleString()}
                  </h1>

                  <h1 className="  capitalize">Company: {item.company}</h1>
                </div>
              </div>
              <div className="close p-5 md:p-7 ">
                <FaTrash
                  onClick={() => removeFromWishlist(item.id)}
                  className="cursor-pointer text-yellow-700"
                />
              </div>
            </main>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          onClick={clearWishlist}
          className="bg-yellow-700 text-white py-3 px-4 text-xl md:text-2xl font-semibold rounded-md shadow-md w-[95%]  md:w-[20%] ">
          Clear Wishlist
        </button>
      </div>
    </div>
  );
}

export default Wishlist;
