import React, { useContext, useEffect, useState } from "react";
import { SingleProductContext } from "../Contexts/SingleContext";
import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

function Cart() {
  const { cart, removeFromCart, clearCart, increaseQuanity, decreaseQuanity } =
    useContext(SingleProductContext);
  console.log(cart);
  const [total, setTotal] = useState(0);
  const shipping = ["Local", "International"];
  const [shippingOp, setShippingOpt] = useState("");
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.quantity), 0));
  }, [cart]);

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
                  src={item && item?.images[0].url}
                  alt="Image"
                  className=" object-cover h-28 w-36 md:h-36 md:w-56"
                />
                <div className="info">
                  <h1 className=" md:text-xl font-semibold capitalize">{item.name}</h1>
                  <h1 className=" md:text-xl font-semibold text-yellow-700">
                    ${(item.price * item.quantity).toLocaleString()}
                  </h1>
                  <h1 className=" md:text-xl   capitalize">Brand: {item.company}</h1>
                  <div className="flex space-x-2 md:space-x-3 items-end mt-4 md:mt-9 md:text-xl">
                    <button
                      onClick={() => decreaseQuanity(item.id)}
                      className=" font-bold text-yellow-700 shadow p-2 border-1 rounded-md  ">
                      <FaMinus />
                    </button>
                    <h3 className="text-2xl ">{item.quantity}</h3>
                    {/* {console.log(item.id)} */}

                    <button
                      onClick={() => increaseQuanity(item.id)}
                      className=" font-bold text-yellow-700 shadow p-2 border-1 rounded-md  ">
                      <FaPlus />
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
          <h1 className="text-center font-bold text-xl pt-8 pb-16">SUMMARY AMOUNT </h1>
          <div className="flex justify-between px-6 text-xl">
            <h1>Sub-Total Amount:</h1>
            <h1>${total.toLocaleString()}</h1>
          </div>
          <div className="flex justify-between px-6 py-2 text-xl my-5">
            <h1>Shipping:</h1>
            <select
              value={shippingOp}
              onChange={(e) => setShippingOpt(e.target.value)}
              className="w-full py-1 border-2 border-gray-300 outline-none ml-5">
              <option value="">Shipping zone</option>
              {shipping.map((x, index) => {
                return (
                  <option key={index} value={x}>
                    {x}
                  </option>
                );
              })}
            </select>
            <p className="px-3"> {shippingOp === "Local" ? "$300" : "$500"}</p>

            {/* <h1>Shipping Fee</h1>
            <h1>$12342</h1> */}
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
                <Link to="/chechout">Proceed to Checkout</Link>
              </button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
