import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../Components/style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import HeroText from "./HeroText";
import { GeneralContext } from "../../../Contexts/GeneralContext";

const heroImage =
  "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg";
const topLeft =
  "https://images.pexels.com/photos/273671/pexels-photo-273671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const bottomLeft =
  "https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const heroContainer =
  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[97%] mx-auto gap-3 mt-3";
function Hero() {
  const { opnenMenu } = useContext(GeneralContext);
  return (
    <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 md:col-span-3">
      <div className="h-[80vh] md:col-span-2 md:row-span-2 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[80vh]">
          <SwiperSlide className="first Slide">
            <HeroText
              heading1="We Sale"
              heading2="Best Home Products"
              paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit alexea.
          Voluptatum distinctio alias voluptas quia."
            />
          </SwiperSlide>
          <SwiperSlide className="second">
            <HeroText
              heading1="Get Your"
              heading2="Classic Interior Materials"
              paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit alexea.
          Voluptatum distinctio alias voluptas quia."
            />
          </SwiperSlide>
          <SwiperSlide className="third ">
            <HeroText
              heading1="Come to Us"
              heading2="Your House Will Change"
              paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit alexea.
          Voluptatum distinctio alias voluptas quia."
            />
          </SwiperSlide>
          <SwiperSlide className="forth">
            <HeroText
              heading1="Your Comfort"
              heading2="Is Always Our Piority"
              paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit alexea.
          Voluptatum distinctio alias voluptas quia."
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="office h-[50vh] md:h-[39vh]">
        <div className="absolute top-[20%] md:top-[10%] p-5 z-10">
          <h1 className="font-bold text-2xl text-white  font-mono">GET</h1>
          <h1 className="font-bold text-3xl text-white">All Office Products</h1>
          <p className="w-[80%] text-xl py-1 text-white">
            Lorem ipsum dolor sit amet consectetur elit.
          </p>
          <button className=" transition-all ease-linear duration-700 bg-yellow-700 text-white py-2 px-3 mt-3 rounded-md shadow-md font-semibold hover:bg-black">
            Check Out
          </button>
        </div>
      </div>
      <div className=" bedroom  h-[50vh] md:h-[39vh]">
        {/* Aside */}
        <div className="absolute  top-[20%] md:top-[10%] p-5 z-10 ">
          <h1 className="font-bold text-2xl text-white font-mono">Check</h1>
          <h1 className="font-bold text-3xl text-white">
            Classic Bedroom Products
          </h1>
          <p className="w-[80%] text-xl text-white py-2">
            Lorem ipsum dolor sit amet consectetur elit.
          </p>
          <button className=" transition-all ease-linear duration-700 bg-yellow-700 text-white py-2 px-3 mt-3 rounded-md shadow-md font-semibold hover:bg-black">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
