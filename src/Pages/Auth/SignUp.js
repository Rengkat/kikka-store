import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assest/icon.png";
const SignUp = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[95%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] border-2 px-[1.5rem] py-[2rem]">
        <Link to="/" className="flex justify-center">
          <div className="logo flex items-center flex-col justify-start hover:opacity-75 ">
            <img src={logo} alt="Logo image" className="w-8 h-8 md:w-10 md:h-10" />
            <h1 className="font-bold md:text-xl -mt-2">
              Buil<span className="text-yellow-600">din</span>
              <span className="text-yellow-700 font-bold text-xl">X</span>
            </h1>
          </div>
        </Link>
        <h1 className="font-bold">Sign up</h1>
        <section>
          <input
            className="w-full block border-[1px] border-zinc-400 rounded-md mt-[1rem] py-2 px-4"
            type="text"
            placeholder="Enter first name"
          />
          <input
            className="w-full block border-[1px] border-zinc-400 rounded-md mt-[1rem] py-2 px-4"
            type="text"
            placeholder="Enter surname"
          />
          <input
            className="w-full block border-[1px] border-zinc-400 rounded-md mt-[1rem] py-2 px-4"
            type="text"
            placeholder="Phone"
          />
          <input
            className="w-full block border-[1px] border-zinc-400 rounded-md mt-[1rem] py-2 px-4"
            type="email"
            placeholder="Enter email"
          />
          <input
            className="w-full block border-[1px] border-zinc-400 rounded-md mt-[1rem] py-2 px-4"
            type="password"
            placeholder="Enter password"
          />
          <input
            className="w-full block border-[1px] border-zinc-400 rounded-md mt-[1rem] py-2 px-4"
            type="password"
            placeholder="Confirm password"
          />
          <button className="bg-yellow-700 w-full py-3 px-10 rounded shadow text-white my-[1rem]">
            Register
          </button>
          <p>
            Already have an account?{" "}
            <span className="font-semibold text-yellow-700">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
