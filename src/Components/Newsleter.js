import React from "react";

function NewsLetter() {
  return (
    <div className="text-center py-10">
      <h1 className="font-bold text-2xl md:text-3xl ">JOIN OUR MAILING LIST</h1>
      <div className="bg-yellow-700 w-[4rem] h-2 my-5 mx-auto" />
      <p className="py-7 md:py-8 text-black w-2/3 mx-auto text-xl md:text-2xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eius
        voluptates, esse minima perferendis delectus tempora nisi optio
        reprehenderit doloremque?
      </p>
      <div className="input bg-yellow-700 inline my-5">
        <input
          type="email"
          className=" py-2 md:py-3 rounded-md px-3 w-[40%] border-2 border-yellow-700"
        />
        <button className="py-2 md:py-3 px-4 rounded-r-md text-white font-semibold bg-yellow-700">
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
