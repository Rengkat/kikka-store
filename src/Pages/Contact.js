import React from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const topLeft =
  "https://images.pexels.com/photos/3935311/pexels-photo-3935311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const bottomLeft =
  "https://images.pexels.com/photos/7031911/pexels-photo-7031911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const inputFiled =
  "border-2 border-white bg-transparent p-3 w-[30rem] placeholder:text-white my-2 rounded-md text-white";
function Contact() {
  return (
    <div>
      <div className="ContactHero h-[60vh] ">
        <div className="absolute top-[50%] right-[40%] z-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl ">CONTACT US</h1>
        </div>
      </div>

      <div className="grid grid-cols-1   md:grid-cols-2 mt-[8rem]  md:mt-[15rem] w-[90%] gap-5 mx-auto">
        <div className="  text-center">
          <h1 className="text-2xl md:text-3xl font-bold my-1 md:my-5">Our Mission</h1>
          <p className="text-xl md:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde doloribus reiciendis,
            incidunt voluptatibus eos maiores optio delectus numquam, libero ipsam quidem.
            Repellendus porro quam eum quasi magnam voluptatem ipsa tempora?
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/7031911/pexels-photo-7031911.jpeg"
            alt="Image"
            className="h-[50vh] md:h-[70vh] object-cover"
          />
        </div>
        <div className="text-center md:hidden mt-5 md:mt-40 mb-10 md:mb-0 ">
          <h1 className="text-2xl md:text-3xl font-bold my-5">Our Vission</h1>
          <p className="text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae eius odit
            ipsa alias accusantium fugit pariatur provident aliquam quod.
          </p>
        </div>
        <div className="mt-10 md:mt-40">
          {" "}
          <img
            src="https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image"
            className="h-[50vh] md:h-[70vh] object-cover"
          />
        </div>
        <div className="text-center hidden md:block mt-5 md:mt-40">
          <h1 className="text-2xl md:text-3xl font-bold my-5">Our Vission</h1>
          <p className="text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae eius odit
            ipsa alias accusantium fugit pariatur provident aliquam quod.
          </p>
        </div>
      </div>
      <div className="form text-center mt-[15rem] h-[50vh]">
        <div className="text-white text-xl absolute z-10 left-5 lg:left-[30%]">
          <h1 className="text-5xl font-bold text-white my-8">Hit Us:</h1>
          <li className="flex">
            <MdLocationOn />{" "}
            <span className="span"> 123, Wziri Ibrahim Crescent Victoria Isalnd Lagos</span>
          </li>
          <li className="flex py-1">
            <BsFillTelephoneFill /> <span className="span">+2348067581175, +234083347576</span>
          </li>
          <li className="pb-10 flex">
            <MdEmail /> <span className="span">victoriaisland@kikka.com</span>
          </li>

          <li className="flex">
            <MdLocationOn /> <span className="span">71, Ahmadu Bello Way, Gwagwalada, Abuja</span>
          </li>
          <li className="flex">
            {" "}
            <BsFillTelephoneFill /> <span className="span">+234806758755, +234083347890</span>
          </li>
          <li className="pb-10 flex">
            <MdEmail /> <span>abuja@kikka.com</span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Contact;
