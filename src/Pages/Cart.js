import React, { useContext } from "react";
import { SingleProductContext } from "../Contexts/SingleContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(SingleProductContext);
  if (cart.length === 0) {
    return (
      <div className="text-center my-[20rem]">
        <h1 className=" md:text-2xl font-semibold">
          No item in your cart.{" "}
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
    <div className="mb-[10rem] w-[100%] md:w-[80%] mx-auto justify-between  flex flex-col md:flex-row">
      <div className=" w-[95%] md:w-[60%] space-x-5 md:h-[60%] mx-auto">
        {cart.map((item) => {
          return (
            <main
              key={item.id}
              className="flex justify-between items-center my-5 shadow-sm rounded-md p-5 border-2 border-gray-100">
              <div className="flex space-x-5">
                <img
                  src={item?.images[0].url}
                  alt="Image"
                  className=" object-cover h-28 w-36 md:h-36 md:w-56"
                />
                <div className="info">
                  <h1 className=" md:text-xl font-semibold capitalize">
                    {item.name}
                  </h1>
                  <h1 className=" md:text-xl font-semibold text-yellow-700">
                    ${item.price.toLocaleString()}
                  </h1>
                  <h1 className=" md:text-xl   capitalize">
                    Brand: {item.company}
                  </h1>
                  <div className="flex space-x-2 md:space-x-3 items-end mt-4 md:mt-9 md:text-xl">
                    <button
                      // onClick={() => decreaseQty(item.id)}
                      className="border-2 border-gray-200 bg-gray-200 rounded-md py-1 px-2 hover:opacity-75">
                      -
                    </button>
                    <h1 className="pb-2">1</h1>

                    <button
                      // onClick={() => increaseQty(item.id)}
                      className="border-2 border-gray-200 bg-gray-200 rounded-md py-1 px-2 hover:opacity-75 ">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="close md:p-7 ">
                <FaTrash
                  onClick={() => removeFromCart(item.id)}
                  className="cursor-pointer text-yellow-700"
                />
              </div>
            </main>
          );
        })}
      </div>
      <div className="w-[95%] md:w-[35%] mt-5 mx-auto">
        <div className=" border-2 border-gray-200 rounded-md pb-10">
          <h1 className="text-center font-bold text-xl pt-8 pb-16">
            SUMMARY AMOUNT{" "}
          </h1>
          <div className="flex justify-between px-6 text-xl">
            <h1>Sub-Total Amount</h1>
            <h1>$12342</h1>
          </div>
          <div className="flex justify-between px-6 py-2 text-xl">
            <h1>Shipping Fee</h1>
            <h1>$12342</h1>
          </div>
          <div className="btn text-center list-none mt-6">
            <li>
              <button
                onClick={clearCart}
                className=" bg-black rounded-md shadow-md text-xl font-semibold hover:opacity-75 text-white w-[90%] mx-auto py-3 px-4 capitalize ">
                Clear all products from cart
              </button>
            </li>
            <li>
              <button className="bg-yellow-700 rounded-md shadow-md text-xl hover:opacity-75 font-semibold text-white w-[90%] mx-auto py-3 mt-3 px-4 capitalize ">
                Checkout
              </button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

// function Cart() {
//   const { cart, removeItem, clearAllCart, increaseQty, quantity, decreaseQty } =
//     useContext(CommerceContext);
//   const uniqeProduct = [...new Set(cart)];

// }

// export default Cart;
