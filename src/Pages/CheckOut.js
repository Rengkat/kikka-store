import React, { useContext, useEffect, useState } from "react";
import { SingleProductContext } from "../Contexts/SingleContext";
import { Link } from "react-router-dom";

function CheckOut() {
  const { cart } = useContext(SingleProductContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, curr) => acc + Number(curr.price) * Number(curr.quantity),
        0
      )
    );
  }, [cart]);

  //   console.log(cart);
  return (
    <div className=" w-[90%] md:w-[35%] mx-auto p-10 mt-[3rem] md:mt-[5rem] mb-[12rem] md:mb-[19rem] shadow-md border-2 border-gray-200">
      <h1 className="text-4xl text-center font-semibold">Checkout</h1>
      <div className="w-full my-5">
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <div className=" flex justify-between my-5 md:text-xl ">
                <div className=" capitalize font-semibold">
                  <h1>{item.name}</h1>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="bg-gray-300 mt-5 h-[3px] w-[3rem] md:w-[12rem]" />
                <h1>${(item.price * item.quantity).toLocaleString()}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between">
        {" "}
        <button className="bg-black text-xl font-semibold rounded-md shadow-md py-3 px-3 w-[30%] text-white">
          <Link to="/cart"> Back</Link>
        </button>
        <button className="bg-yellow-700 text-xl font-semibold rounded-md shadow-md py-3 px-3 w-[60%] md:w-[40%] text-white">
          Pay ${total.toLocaleString()}
        </button>
      </div>
    </div>
  );
}

export default CheckOut;
