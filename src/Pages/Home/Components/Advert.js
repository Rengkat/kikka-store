import React from "react";

function Advert() {
  return (
    <div className="grid grid-cols-2 h-[80vh]  gap-2 mt-3 w-[100%] mx-auto md:grid-cols-3 overflow-hidden md:mb-[15rem]  ">
      <div className="roomAd col-span-2 row-span-2 md:h-[80vh] ">
        <div className="absolute top-[20%] md:top-[40%] text-white text-center w-full z-10 ">
          <h1 className="text-2xl md:text-5xl  font-bold capitalize">
            get the best livig room products{" "}
          </h1>
          <h1 className="text-2xl md:text-6xl  font-bold capitalize py-5">
            at up to <span className="text-yellow-600">20% off</span>
          </h1>
        </div>
      </div>
      <div className="roomAd2  h-[39vh]">
        <div className="absolute z-10 top-[30%] text-white text-2xl md:text-3xl capitalize font-bold left-[10%]">
          <h1>Wanderful </h1>
          <h1 className="text-yellow-500 text-2xl md:text-4xl">Dinning</h1>
          <h1>products collection</h1>
        </div>
      </div>
      <div className="roomAd3 h-[39vh]">
        <div className="absolute z-10 top-[10%] text-white text-xl md:text-4xl font-bold p-8">
          <h1>Many Products </h1>
          <h1>
            for Your <span className="text-yellow-500">Children Room</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Advert;
